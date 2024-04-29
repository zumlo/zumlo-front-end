import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZCheckboxComponent } from './z-checkbox.component';

describe('CheckboxComponent', () => {
  let component: ZCheckboxComponent;
  let fixture: ComponentFixture<ZCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
