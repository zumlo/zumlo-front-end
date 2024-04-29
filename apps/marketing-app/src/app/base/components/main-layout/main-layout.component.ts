import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ZFormCreationService, ZLoaderService, ZToastrService, marketingFields } from '@zumlo/ui';
import { primarySection, secondarySection } from '../../../utils/why-zumlo-content';
import { MainService } from '../../../services/main/main.service';
import { contactUs } from './payload';

@Component({
  selector: 'z-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements OnChanges, AfterViewInit, OnInit {

  @Input() sectionId!: string;
  @ViewChildren('section') sectionElements!: QueryList<any>;
  @Output() className: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  displayedTextPrimary = '';
  displayedTextSecondary = '';

  activeElement!: string;
  showOtherContent!: boolean;
  isValid!: boolean;
  activeElementGallery!: boolean;
  whyZumloSection!: boolean;
  mandateClassForDiscover!: boolean;
  heathCareSection!: boolean;
  configs: any = marketingFields;
  primaryValues: any = primarySection;
  secondaryValues: any = secondarySection;
  isDisabled: boolean = false;
  markControlsAsDirty!: boolean;
  scrollPositions!: any;
  isHighlighted: boolean = false;

  constructor(private elRef: ElementRef, formCreator: ZFormCreationService, private cdr: ChangeDetectorRef,
    private mainService: MainService, private loaderService: ZLoaderService, private toastr: ZToastrService) {
    this.form = formCreator.getFormGroup(this.configs);
  }

  ngOnInit() {}

  // Getting the scroll postion.
  ngAfterViewInit() {
    window.scrollTo(0, 0);
    this.scrollPositions = {
      "home": document.getElementById('home')?.getBoundingClientRect().top || 0,
      "gallery": document.getElementById('gallery')?.getBoundingClientRect().top || 0,
      "whyZumlo": document.getElementById('whyZumlo')?.getBoundingClientRect().top || 0,
      "healthcareProfessionals": document.getElementById('healthcareProfessionals')?.getBoundingClientRect().top || 0,
      "individuals": document.getElementById('individuals')?.getBoundingClientRect().top || 0,
      "joinOurJourne": document.getElementById('joinOurJourne')?.getBoundingClientRect().top || 0,
      "contactUs": document.getElementById('contactUs')?.getBoundingClientRect().top || 0,
    }
    this.cdr.detectChanges();

  }

  // on clicks header scroll-down through id.
  ngOnChanges(changes: SimpleChanges): void {
    if(this.scrollPositions) {
      const sectionId = this.sectionId;
      const scrollPosition = this.scrollPositions[sectionId];
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  // API calling for the contact page.
  onButtonClick(event: any) {

    if (!this.isValid) {
      this.toastr.showInfo('', 'You must agree to the Terms & Conditions.');
      return
    }
    let requiredData: contactUs = {
      "firstName": this.form.value?.firstName,
      "lastName": this.form.value?.lastName,
      "phoneNumber": this.form.value.phoneNumber,
      "email": this.form.value?.email,
      "country": this.form.value?.country,
      "state": this.form.value?.state,
      "message": this.form.value?.message,
      "userType": this.form.value?.userType
    }
    this.loaderService.showSpinner();
    this.mainService.contactDetails(requiredData).subscribe({
      next: (result: any) => {
        if (result !== undefined) {
          this.toastr.showSuccess('', 'Your request has been submitted');
          this.form.patchValue({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            state: '',
            message: '',
            userType: '',
            Term: false
          });
          this.loaderService.hideSpinner();
        }
      },
      error: (error: any) => {
        this.loaderService.hideSpinner();
      }
    })
  }

  // Term&condition checkbox value changes.
  valueChanged(event: any) {
    this.isValid = event.value.checked;
  }

  // auto-type why zumlo section.
  animateText(text: string, contentType: string): Promise<boolean> {
    return new Promise((resolve: any) => {
      const characters = text.split(' ');
      let i = 0;
      const interval = setInterval(() => {
        if (contentType == 'primarySection') this.displayedTextPrimary += ' ' + characters[i];
        else this.displayedTextSecondary += ' ' + characters[i];
        i++;
        if (i === characters.length) {
          setTimeout(() => {
            this.showOtherContent = true;
          }, 500);
          clearInterval(interval);
          resolve(true);
        }
      }, 400);
    })
  }

  // scenarios to manage primary and secondary boxes.
  autoTextContent(id: any) {
    this.className.emit(id);
    if (this.whyZumloSection)
      return;

    this.whyZumloSection = true;
    this.animateText(this.primaryValues.content, 'primarySection').then((result: any) => {
      this.animateText(this.secondaryValues.content, 'secondaySection');
    });
  }

  addAnimationToGallery(val: any, id?: any) {
    this.className.emit(id);
    if (this.activeElementGallery)
      return;

    this.activeElementGallery = val;
    setTimeout(() => {
      this.mandateClassForDiscover = true;
    }, 5000);
  }

  // On clicks arrow down icon it will redirect to the mentioned it.
  scrollDown(id: string) {
    let element = this.elRef.nativeElement.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollClassShare(id: string) {
    this.className.emit(id);
  }
}
