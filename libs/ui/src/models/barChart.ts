export interface barChartConfigs {
  chartOptions: {
    series: {
      name: string;
      data: number[];
    }[];
    chart: {
      height: number;
      type: string;
    };
    plotOptions: {
      bar: {
        dataLabels: {
          position: string;
        };
      };
    };
    dataLabels: {
      enabled: boolean;
      formatter: (val: number) => string;
      offsetY: number;
      style: {
        fontSize: string;
        colors: string[];
      };
    };
    xaxis: {
      categories: string[];
      position: string;
      labels: {
        offsetY: number;
      };
      axisBorder: {
        show: boolean;
      };
      axisTicks: {
        show: boolean;
      };
      crosshairs: {
        fill: {
          type: string;
          gradient: {
            colorFrom: string;
            colorTo: string;
            stops: number[];
            opacityFrom: number;
            opacityTo: number;
          };
        };
      };
      tooltip: {
        enabled: boolean;
        offsetY: number;
      };
    };
    fill: {
      type: string;
      gradient: {
        shade: string;
        type: string;
        shadeIntensity: number;
        gradientToColors?: any;
        inverseColors: boolean;
        opacityFrom: number;
        opacityTo: number;
        stops: number[];
      };
    };
    yaxis: {
      axisBorder: {
        show: boolean;
      };
      axisTicks: {
        show: boolean;
      };
      labels: {
        show: boolean;
        formatter: (val: number) => string;
      };
    };
    title: {
      text: string;
      floating: number;
      offsetY: number;
      align: string;
      style: {
        color: string;
      };
    };
  };
}
