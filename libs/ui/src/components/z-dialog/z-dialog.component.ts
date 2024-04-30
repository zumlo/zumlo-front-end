import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UiModule } from '../../modules/ui/ui.module';
import { ZSimpleButtonComponent } from '../z-simple-button/z-simple-button.component';

@Component({
  selector: 'z-dialog',
  standalone: true,
  imports: [CommonModule, UiModule, ZSimpleButtonComponent],
  templateUrl: './z-dialog.component.html',
  styleUrl: './z-dialog.component.scss',
})
export class ZDialogComponent implements OnInit {
  @Input() group!: FormGroup;
  @Input() config!: any;
  @Output() changed = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ZDialogComponent>
  ) {}

  ngOnInit(): void {}

  // While saving the data it will check the validation on the formControl.
  onConfirmClick(): void {
    if (this.data.config) {
      if (this.group.valid) {
        this.dialogRef.close(this.group.value);
      } else {
        this.group.markAllAsTouched();
      }
    } else {
      this.dialogRef.close(true);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
