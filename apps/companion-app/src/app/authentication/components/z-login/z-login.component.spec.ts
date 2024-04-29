import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZLoginComponent } from './z-login.component';

describe('ZLoginComponent', () => {
  let component: ZLoginComponent;
  let fixture: ComponentFixture<ZLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
