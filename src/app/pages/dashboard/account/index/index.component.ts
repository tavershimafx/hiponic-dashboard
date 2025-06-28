import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChartOptions, ChatHead, MessageType } from '@models/models';
import { MessagingContext } from '@services/messaging-context';
import { PageTitleService } from '@services/page-title.service';

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
  readonly messageType: typeof MessageType = MessageType
  users = [
    "../../../../assets/images/users/user-1.png",
    "../../../../assets/images/users/user-2.png",
    "../../../../assets/images/users/user-3.png",
    "../../../../assets/images/users/user-4.png"
  ]
  quickMessages?: Array<ChatHead>

  constructor(messageContext: MessagingContext, pageTitle: PageTitleService){
   this.quickMessages = messageContext.chats?.slice(0, 4)

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
  
    pageTitle.setTitle({ title: "Dashboard" })
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
