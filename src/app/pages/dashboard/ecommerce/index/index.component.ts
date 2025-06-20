import { Component } from '@angular/core';
import { ChartOptions } from '@models/models';
import { PageTitleService } from '@services/page-title.service';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive } from 'ng-apexcharts';

export type PieOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent{

  chartOptions: Partial<ChartOptions>;
  pieOptions: Partial<PieOptions>;
  barOptions: Partial<ChartOptions>;

  constructor(pageTitle: PageTitleService){
   pageTitle.setTitle({ title: "Ecommerce", description: "Monitor progress regularly to increase sales" })
    
   
    this.chartOptions = {
      series: [
        {
          name: "Project X",
          data: [40, 85, 35, 68, 30, 75, 50, 100, 30, 75, 50],
          color: "#2563EB"
        },
      ],
      chart: {
        height: 350,
        type: "area",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "category",
        categories: [
          "Dec 24",
          "Dec 25",
          "Dec 26",
          "Dec 27",
          "Dec 28",
          "Dec 29",
          "Dec 30",
          "Dec 31",
          "Jan 1",
          "Jan 2",
          "Jan 3",
          "Jan 4",
        ]
      },
    };

    this.pieOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        height: 260,
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.barOptions = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
            //colors: ["#38BDF8", "#DBEAFE"],
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }
}
