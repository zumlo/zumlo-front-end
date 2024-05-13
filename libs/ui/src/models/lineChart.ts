export interface LineChartConfigs {
  chartOptions: {
    series: [
      {
        name: string;
        data: number[];
      }
    ];
    chart: {
      height: number;
      type: string;
      zoom: {
        enabled: boolean;
      };
    };
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      curve: string;
    };
    title: {
      text: string;
      align: string;
    };
    grid: {
      row: {
        colors: string[]; // takes an array which will be repeated on columns
        opacity: number;
      };
    };
    xaxis: {
      categories: string[];
    };
  };
}
