import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZDateComponent } from './z-date.component';

describe('DateComponent', () => {
  let component: ZDateComponent;
  let fixture: ComponentFixture<ZDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZDateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
