import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from '../z-line-chart/z-line-chart.component';

@Component({
  selector: 'z-bar-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './z-bar-chart.component.html',
  styleUrl: './z-bar-chart.component.scss',
})
export class ZBarChartComponent {
  @Input() config: any;
  @Output() changed = new EventEmitter();
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {}
}
