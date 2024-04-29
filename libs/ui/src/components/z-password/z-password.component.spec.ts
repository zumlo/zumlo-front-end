import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZPasswordComponent } from './z-password.component';

describe('PasswordComponent', () => {
  let component: ZPasswordComponent;
  let fixture: ComponentFixture<ZPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
