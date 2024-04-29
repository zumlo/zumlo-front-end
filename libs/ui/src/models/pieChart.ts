export interface pieChartConfigs {
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
            position: string;
          };
        };
      }
    ];
  };
}
