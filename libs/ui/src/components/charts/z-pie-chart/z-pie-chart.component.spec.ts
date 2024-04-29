import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZPieChartComponent } from './z-pie-chart.component';

describe('ZPieChartComponent', () => {
  let component: ZPieChartComponent;
  let fixture: ComponentFixture<ZPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZPieChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
