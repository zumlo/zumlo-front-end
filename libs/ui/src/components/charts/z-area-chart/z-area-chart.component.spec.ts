import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZAreaChartComponent } from './z-area-chart.component';

describe('ZAreaChartComponent', () => {
  let component: ZAreaChartComponent;
  let fixture: ComponentFixture<ZAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZAreaChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
