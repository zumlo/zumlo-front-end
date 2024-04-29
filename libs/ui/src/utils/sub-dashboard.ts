export const seekerDashboard: any = [
    {
        name:'statistics',
        type:'statistics',
        heading:'Statistics',
        stats:[85,9,20,5],
        statisticsType:['Active Seekers','Upcoming Appointments', 'Active Wellness Plans', 'Active Assessments']
    },
    {
        name:'viewSeeker',
        type:'viewSeeker',
        heading:'View Seeker',
        description:'You can view Seekers listing',
        buttons:[{
            icon:'visibility',
            tooltip:'view'
        }]
    },
    {
        name:'wellnessPlan',
        type:'wellnessPlan',
        heading:'Wellness Plan',
        description:"Lets's create custom wellness plan!",
        buttons:[{
            icon:'add',
            tooltip:'add'
        }]
    },
    {
        name:'assessment',
        type:'assessment',
        heading:'Assessment',
        description:"Lets's create custom assesments!",
        buttons:[{
            icon:'add',
            tooltip:'add'
        }]
    },
    {
        name:'areaChart',
        type:'areaChart',
            chartOptions:{
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
                            name: "New Patient",
                            data: [65, 62, 64, 65, 63, 64],
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
                    yaxis: {
                        show: false,
                    },
                }
              }

]
