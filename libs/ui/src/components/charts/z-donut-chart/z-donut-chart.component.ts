import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from '../z-line-chart/z-line-chart.component';

@Component({
  selector: 'z-z-donut-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './z-donut-chart.component.html',
  styleUrl: './z-donut-chart.component.scss',
})
export class ZDonutChartComponent {
  @Input() config: any;
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {}
}
