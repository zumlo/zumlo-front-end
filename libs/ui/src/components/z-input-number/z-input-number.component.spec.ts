import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZInputNumberComponent } from './z-input-number.component';

describe('ZInputNumberComponent', () => {
  let component: ZInputNumberComponent;
  let fixture: ComponentFixture<ZInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZInputNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
