import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZLineChartComponent } from './z-line-chart.component';

describe('ZLineChartComponent', () => {
  let component: ZLineChartComponent;
  let fixture: ComponentFixture<ZLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZLineChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
