import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZRadioComponent } from './z-radio.component';

describe('RadioComponent', () => {
  let component: ZRadioComponent;
  let fixture: ComponentFixture<ZRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZRadioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
