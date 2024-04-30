import { Component, Renderer2 } from '@angular/core';
import { carouselConfigs } from 'libs/ui/src/models/carousel';
import { pieChartConfigs } from 'libs/ui/src/models/pieChart';
import { donutChartConfigs } from 'libs/ui/src/models/donutChart';

@Component({
  selector: 'z-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrl: './super-admin-dashboard.component.scss',
})
export class SuperAdminDashboardComponent {
  constructor(private render: Renderer2) {}

  showWidgetDropdown: boolean = false;
  pieChartOptions: any = {
    chartOptions: {
      series: [28, 20, 27, 20, 5],
      chart: {
        width: 420,
        type: 'pie',
      },
      fill: {
        colors: ['#cbe2d1', '#4ea692', '#1b5c74', '#6d597a', '#ff9d48'],
      },
      labels: [
        'Psychologist',
        'Psychiatrist',
        'Psychotherapist',
        'Addiction counselor',
        'Psychoanalyst',
      ],
      colors: ['#cbe2d1', '#4ea692', '#1b5c74', '#6d597a', '#ff9d48'],
      dataLabels: {
        style: {
          fontSize: '10px',
          fontWeight: "normal"
        },
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: 'light',
        style: {
          fontSize: '12px'
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };
  donutChartOptions: any = {
    chartOptions: {
      series: [20, 10, 20, 25, 25],
      chart: {
        width: 400,
        type: 'donut',
      },
      fill: {
        colors: ['#cbe2d1', '#4ea692', '#1b5c74', '#043a4e', '#ff9d48'],
      },
      labels: [
        'Anxiety',
        'Depression',
        'Stress',
        'Insomnia',
        'Bipolar Disorder',
      ],
      colors: ['#cbe2d1', '#4ea692', '#1b5c74', '#043a4e', '#ff9d48'],
      dataLabels: {
        style: {
          fontSize: '10px',
          fontWeight: "normal"
        },
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: 'light',
        style: {
          fontSize: '12px'
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      },
    },
  };
  date: Date = new Date();
  imgData: Array<any> = [
    {
      id: 1,
      type: 'Anxiety',
      date: this.date,
      heading: 'Lifestyle Changes',
      description:
        'Encourage users to adopt healthy lifestyle habits that can help.',
      url: '.../../../../../../assets/images/user-6.jpg',
      url1: '.../../../../../../assets/images/user-7.jpg',
    },
    {
      id: 2,
      type: 'Depression',
      date: this.date,
      heading: 'Lifestyle Changes',
      description:
        'Encourage users to adopt healthy lifestyle habits that can help.',
      url: '.../../../../../../assets/images/user-7.jpg',
      url1: '.../../../../../../assets/images/user-6.jpg',
    },
    {
      id: 4,
      type: 'Depression3',
      date: this.date,
      heading: 'Lifestyle Changes',
      description:
        'Encourage users to adopt healthy lifestyle habits that can help.',
      url: '.../../../../../../assets/images/user-7.jpg',
      url1: '.../../../../../../assets/images/user-6.jpg',
    },

    {
      id: 5,
      type: 'Depression',
      date: this.date,
      heading: 'Lifestyle Changes',
      description:
        'Encourage users to adopt healthy lifestyle habits that can help.',
      url: '.../../../../../../assets/images/user-7.jpg',
      url1: '.../../../../../../assets/images/user-6.jpg',
    },
    {
      id: 6,
      type: 'Depression3',
      date: this.date,
      heading: 'Lifestyle Changes',
      description:
        'Encourage users to adopt healthy lifestyle habits that can help.',
      url: '.../../../../../../assets/images/user-7.jpg',
      url1: '.../../../../../../assets/images/user-6.jpg',
    },

    {
      id: 7,
      type: 'Depression',
      date: this.date,
      heading: 'Lifestyle Changes',
      description:
        'Encourage users to adopt healthy lifestyle habits that can help.',
      url: '.../../../../../../assets/images/user-7.jpg',
      url1: '.../../../../../../assets/images/user-6.jpg',
    },
    {
      id: 8,
      type: 'Depression3',
      date: this.date,
      heading: 'Lifestyle Changes',
      description:
        'Encourage users to adopt healthy lifestyle habits that can help.',
      url: '.../../../../../../assets/images/user-7.jpg',
      url1: '.../../../../../../assets/images/user-6.jpg',
    },
    {
      id: 9,
      type: 'Depression',
      date: this.date,
      heading: 'Lifestyle Changes',
      description:
        'Encourage users to adopt healthy lifestyle habits that can help.',
      url: '.../../../../../../assets/images/user-7.jpg',
      url1: '.../../../../../../assets/images/user-6.jpg',
    },
    {
      id: 10,
      type: 'Depression3',
      date: this.date,
      heading: 'Lifestyle Changes',
      description:
        'Encourage users to adopt healthy lifestyle habits that can help.',
      url: '.../../../../../../assets/images/user-7.jpg',
      url1: '.../../../../../../assets/images/user-6.jpg',
    },
  ];

  configs: carouselConfigs = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    slider: 1,
    navigation: true,
    autoHeight: true,
    autoWidth: false,
    nav: true,
    centerMode: false,
    ltr: true,
    responsive: {
      0: {
        items: 1.2,
        // margin:20,
        width: '100%',
      },
      600: {
        items: 1.1,
        width: '67%',
      },
      768: {
        items: 1.5,
        // margin:30,
        width: '67%',
      },
    },
    imageData: [
      {
        id: 1,
        heading: 'How to make yourself Mindfulness',
        type: 'Scoring',
        questions: '9 Total Questions',
        assignType: 'Not Assigned',
        assesmentType: 'block',
      },
      {
        id: 2,
        heading: 'How to make yourself Mindfulness',
        type: 'Scoring',
        questions: '9 Total Questions',
        assignType: 'Not Assigned',
        assesmentType: 'block',
      },
      {
        id: 3,
        heading: 'How to make yourself Mindfulness',
        type: 'Scoring',
        questions: '9 Total Questions',
        assignType: 'Not Assigned',
        assesmentType: 'block',
      },
    ],
  };

  showWidget() {
    this.showWidgetDropdown = true;
    if (this.showWidgetDropdown)
      this.render.setStyle(document.body, 'overflow', 'hidden');
  }

  closeWidget() {
    this.render.removeStyle(document.body, 'overflow');
    this.showWidgetDropdown = false;
  }
}
