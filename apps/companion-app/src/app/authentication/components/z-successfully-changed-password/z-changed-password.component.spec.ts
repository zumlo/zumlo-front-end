import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZChangedPasswordComponent } from './z-changed-password.component';

describe('ZChangedPasswordComponent', () => {
  let component: ZChangedPasswordComponent;
  let fixture: ComponentFixture<ZChangedPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZChangedPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZChangedPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
