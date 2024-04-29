import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZDonutChartComponent } from './z-donut-chart.component';

describe('ZDonutChartComponent', () => {
  let component: ZDonutChartComponent;
  let fixture: ComponentFixture<ZDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZDonutChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
