export interface donutChartConfigs {
  chartOptions: {
    series: number[];
    chart: {
      width: number;
      type: string;
    };
    fill: {
      colors: string[];
    };
    labels: string[];
    colors: string[];
    dataLabels: {
      style: {
        colors: string[];
      };
    };

    responsive: [
      {
        breakpoint: number;
        options: {
          chart: {
            width: number;
          };
          legend: {
            show: boolean;
          };
        };
      }
    ];
    legend: {
      position: string;
      offsetY: number;
      height: number;
    };
  };
}
