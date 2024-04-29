import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZInputMaskComponent } from './z-input-mask.component';

describe('InputMaskComponent', () => {
  let component: ZInputMaskComponent;
  let fixture: ComponentFixture<ZInputMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZInputMaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZInputMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
