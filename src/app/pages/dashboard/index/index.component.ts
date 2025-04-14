import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexMarkers,
  ApexPlotOptions,
  ApexFill,
  ApexGrid,
} from "ng-apexcharts";
import { IQuickMessage } from '../../../types/models';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: any; // ApexStroke;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
};

@Component({
  selector: 'index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent{
  chartOptions: Partial<ChartOptions>;
  fluentOptions: Partial<ChartOptions>;
  
  users = [
    "../../../../assets/images/users/user-1.png",
    "../../../../assets/images/users/user-2.png",
    "../../../../assets/images/users/user-3.png",
    "../../../../assets/images/users/user-4.png"
  ]
  quickMessages: Array<IQuickMessage> = [
    { username: "Tavershima Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-4.png", message: "Hi, how are you today?"},
    { username: "Jennifer Kato", time: "08:24", profilePicture: "../../../../assets/images/users/user-3.png", message: "Hi, how are you today?"},
    { username: "Queen Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-2.png", message: "Hi, how are you today?"},
    { username: "Sussan Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-1.png", message: "Hi, how are you today?"}
  ]

  constructor(){
   
    this.chartOptions = {
      series: [
        {
          name: "Project X",
          data: [40, 55, 35, 68, 48, 75, 50, 100],
          color: "#2563EB"
        },
      ],
      chart: {
        height: 290,
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
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
        ]
      },
    };

    this.fluentOptions = {
      series: [
        {
          data: [25, 50, 23, 15, 50, 75, 27, 33, 100]
        }
      ],
      tooltip: {
        enabled: false
      },
      chart: {
        height: 100,
        type: "line",
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
        width: 2
      },
      xaxis: {
        categories: [],
        labels:{
          show: false
        }
      },
      yaxis: {
        labels:{
          show: false
        }
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
              show: false
          }
        },   
        yaxis: {
            lines: {
                show: false
            }
        },
      },
    };
  
  }

  public generateData(baseval: number, count: number, yrange: any) {
    // var i = 0;
    // var series = [];
    // while (i < count) {
    //   var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    //   var y =
    //     Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    //   var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    //   series.push([x, y, z]);
    //   baseval += 86400000;
    //   i++;
    // }
    // return series;
  }
}
