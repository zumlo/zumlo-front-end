import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from '../z-line-chart/z-line-chart.component';

@Component({
  selector: 'z-pie-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './z-pie-chart.component.html',
  styleUrl: './z-pie-chart.component.scss',
})
export class ZPieChartComponent {
  @Input() config!: any;
  @Output() changed = new EventEmitter();
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {}
}
