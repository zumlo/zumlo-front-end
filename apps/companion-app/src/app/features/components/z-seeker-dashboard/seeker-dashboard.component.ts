
import { Component } from '@angular/core';
import { areaChartConfigs } from 'libs/ui/src/models/areaChart';
@Component({
  selector: 'z-seeker-dashboard',
  templateUrl: './seeker-dashboard.component.html',
  styleUrl: './seeker-dashboard.component.scss',
})
export class SeekerDashboardComponent {
    areaChartOptions: areaChartConfigs = {
      chartOptions: {
        chart: {
          maxWidth: "100%",
          type: "area",
          height: '250',
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        yaxis: {
           
          show: false,
          opposite: false,
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: 0
          },
        },
        series: [
          {
            name: "New Seekers",
            data: [65, 64, 64, 65, 63, 64],
            color: "#cbe2d1",
          },
        ],
        xaxis: {
          categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
      }
    }
  }
  

