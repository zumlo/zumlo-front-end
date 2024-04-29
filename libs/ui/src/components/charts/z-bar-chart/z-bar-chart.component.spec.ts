import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZBarChartComponent } from './z-bar-chart.component';

describe('ZBarChartComponent', () => {
  let component: ZBarChartComponent;
  let fixture: ComponentFixture<ZBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZBarChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
