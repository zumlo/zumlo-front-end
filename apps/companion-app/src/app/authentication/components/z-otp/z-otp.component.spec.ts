import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZOtpComponent } from './z-otp.component';

describe('ZOtpComponent', () => {
  let component: ZOtpComponent;
  let fixture: ComponentFixture<ZOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZOtpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
