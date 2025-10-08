import { Component, ViewChild } from '@angular/core';
import { ChartOptions, TransactionStatus } from '@models/models';
import { UtilityFunctions } from '@services/functions';
import { PageTitleService } from '@services/page-title.service';
import { lineData } from '@store/faker';
import { classes } from '@directives/badge.directive';
import { suspicious, falseDetection } from '@store/faker';
import { ITransaction } from '@models/models';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent } from 'ng-apexcharts';
//import { AgChartOptions, DataType } from "ag-charts-enterprise";
import { DataType, data } from "@store/data";
import { topology } from "@store/topology";

export type PieOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

const numberFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  useGrouping: true,
});

@Component({
  selector: 'access-index',
  standalone: false,
  templateUrl: './access-index.component.html',
  styleUrl: './access-index.component.css'
})
export class AccessIndexComponent{

  @ViewChild("chart1", { static: true}) chart1?: ChartComponent;
  
  agOptions : any
  suspect: ITransaction[] = suspicious.splice(0, 5)
  falseAlarm: ITransaction[] = falseDetection.filter(k => k.status != TransactionStatus.Approved && k.status != TransactionStatus.Flagged).splice(10, 5)
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
  lineOptions: Partial<ChartOptions>;

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
          name: "Mobile App",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Online",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "POS",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ]
  
  lineSeries = [
        {
          name: "Mobile App",
          data: [10, 31, 35, 41, 49, 42, 39, 61, 52]
        },
        {
          name: "POS",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 98]
        },
        {
          name: "Online",
          data: [50, 61, 45, 71, 69, 82, 89, 91, 158]
        }
      ]
  constructor(pageTitle: PageTitleService){
    pageTitle.setTitle({ title: "Transaction Monitoring", description: "Monitor transactions, volumes, suspicious activities and more" })
       
    //this.chartOptions 

    this.pieOptions = {
      series: this.pieX,
      chart: {
        height: 260,
        type: "donut"
      },
      labels: ["2020", "2021", "2021", "2023", "2024"],
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
      title: {
        text: `Transaction volume`,
        align: "left",
        style: {
        fontFamily: "Roboto-Medium",
        fontWeight: "600",
        color: "var(--theme)"
        }
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

    this.lineOptions = {
      series: this.lineSeries,
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Detections by transaction source",
        align: "left",
        style: {
        fontFamily: "Roboto-Medium",
        fontWeight: "600",
        color: "var(--theme)"
        }
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
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
      }
    };

    this.agOptions = {
      title: {
        text: "GDP by State",
      },
      data,
      topology,
      series: [
        {
          type: "map-shape",
          idKey: "name",
          colorKey: "gdp",
          tooltip: {
            renderer: ({ datum }: { datum: { gdp: number } }) => ({
              data: [
                { label: "GDP", value: numberFormatter.format(datum.gdp) },
              ],
            }),
          },
        },
      ],
      gradientLegend: {
        enabled: true,
        scale: {
          label: {
            fontSize: 9,
            formatter: ({ value }: { value: string}) => `$${Math.floor(+value / 1e6)}T`,
          },
        },
      },
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

  getStatusString(status: number){
      switch (status) {
        case 0:
          return "Pending"
        case 1:
          return "Approved"
        case 2:
          return "Declined"
        case 3:
          return "Flagged"
        default:
          return "";
      }
    }
  
     formatMoney(value: string | number){
      return UtilityFunctions.formatMoney(value)
    }
    
      getTypeString(status: number){
        switch (status) {
          case 0:
            return "Finacle"
          case 1:
            return "Tellworld"
          case 2:
            return "NEFT_NIP"
          case 3:
            return "RTGS"
          case 4:
            return "CRP"
          case 5:
            return "Pensions"
          case 6:
            return "GTP"
          case 7:
            return "NAPs"
          default:
            return "";
        }
      }
    
      getStatusClass(status: number): classes{
        switch (status) {
          case 0:
            return "info"
          case 1:
            return "success"
          case 2:
            return "warning"
          case 3:
            return "danger"
          default:
            return "info";
        }
      }
}
