import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from '../z-line-chart/z-line-chart.component';

@Component({
  selector: 'z-area-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './z-area-chart.component.html',
  styleUrl: './z-area-chart.component.scss',
})
export class ZAreaChartComponent {
  @Input() config: any;
  @Output() changed = new EventEmitter();
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {}
}
