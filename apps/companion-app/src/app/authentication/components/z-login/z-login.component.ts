import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ZFormCreationService, ZIndexDbService, ZStorageService, LoginFieldsConfigs } from '@zumlo/ui';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { CarouselConfigs } from 'libs/ui/src/models/carousel';
import { login } from '../../models/model';
import objectHash from 'object-hash';
import { Subscription } from 'rxjs';
@Component({
  selector: 'z-login',
  templateUrl: './z-login.component.html',
  styleUrl: './z-login.component.scss',
})
export class ZLoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  configs: any = LoginFieldsConfigs;
  isValid: boolean = false;
  apiData: CarouselConfigs[] = [];
  subscription = new Subscription();
  data: any

  constructor(private _storage: ZStorageService, public dialog: MatDialog, formCreator: ZFormCreationService, private _router: Router, private authentication: AuthenticationService, private indexDb: ZIndexDbService) {
    this.form = formCreator.getFormGroup(this.configs);

    // This will get the encrypted data of user's credential
    this.indexDb.initializeDB().then(() => {
      this.indexDb.getAllObjects().then((objects: any[]) => {
        if(objects[0]) {
          this.data = objects[0].ecd;
          this.data = JSON.parse(atob(this.data))
          debugger
          this.form.patchValue({
            email: this.data.email,
            password: this.data.password,
          })
        }
      });
    });

  }

  ngOnInit(): void {
  }

  // for submit the form
  loginUser() {
    if (this.form.invalid) { return this.form.markAllAsTouched() }
    let requiredData: login = {
      email: this.form.value?.email,
      password: this.form.value?.password,
    }
    
    this.subscription.add(this.authentication.loginRoute(requiredData).subscribe({
      next: (res: any) => {
        
        if(res.success){debugger
          // This will set the encrypted data of user's credential when remember me is checked
          if(this.form.value.remember && !this.data) {
            this.indexDb.addObject(requiredData);
          }else if(this.data?.password != requiredData.password) {
            this.indexDb.deleteObject();
            this.indexDb.addObject(requiredData);
          }
          this._storage.setSessionStorage('token', res.data.token);
          this._router.navigateByUrl('/super-admin');
        }
      },
      error: (error: any) => {
      }
    }));
  }

  // Value emit from children to parent component for getting the checkbox value.
  valueChanged(event: any) {
    this.isValid = event.value.checked;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

