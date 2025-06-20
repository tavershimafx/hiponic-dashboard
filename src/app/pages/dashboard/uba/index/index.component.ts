import { Component, ViewChild } from '@angular/core';
import { ChartOptions } from '@models/models';
import { PageTitleService } from '@services/page-title.service';
import { lineData } from '@store/faker';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent } from 'ng-apexcharts';

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

  @ViewChild("chart1", { static: true}) chart1?: ChartComponent;
  

  chartOptions: Partial<ChartOptions> = {
      series: [
        {
          name: "Processed Transactions",
          data: lineData().x,
          color: "#2563EB"
        },
        {
          name: "Imported Transactions",
          data: lineData().x,
          color: "#CB2F23"
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
        curve: "smooth",
        width: 0.5
      },
      xaxis: {
        type: "category",
        categories: lineData().y
      },
    };
  pieOptions: Partial<PieOptions>;
  barOptions: Partial<ChartOptions>;

  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  
  // [
  //         "Dec 24", "Dec 25", "Dec 26","Dec 27",
  //         "Dec 28", "Dec 29", "Dec 30", "Dec 31", 
  //         "Jan 1", "Jan 2", "Jan 3", "Jan 4",
  //       ]

  pieX = [44, 55, 13, 43, 22]

  barX = [
          "Feb", "Mar", "Apr", "May",
          "Jun", "Jul", "Aug", "Sep", "Oct"
        ]
  barSeries = [
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
      ]
  constructor(pageTitle: PageTitleService){
    pageTitle.setTitle({ title: "E-Callover", description: "Monitor progress and activities of e-callover system" })
       
    //this.chartOptions 

    this.pieOptions = {
      series: this.pieX,
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
      series: this.barSeries,
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
        categories: this.barX
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

  filterLine(i: number){
    // this.chart1?.updateSeries([
    //     {
    //       name: "Processed Transactions",
    //       data: lineData().x.splice(0, i * 30),
    //       color: "#2563EB"
    //     },
    //     {
    //       name: "Imported Transactions",
    //       data: lineData().x.splice(0, i * 30),
    //       color: "#CB2F23"
    //     },
    //   ])

    // this.chartOptions.series![0].data = lineData().x.splice(0, i * 30)
    // this.chartOptions.series![1].data = lineData().x.splice(0, i * 30)
    
  }
}
