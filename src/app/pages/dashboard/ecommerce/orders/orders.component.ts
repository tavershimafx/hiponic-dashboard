import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { NewTaskModal } from '@modals/new-task/new-task.component';
import { PageTitleService } from '@services/page-title.service';

@Component({
  selector: 'orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent{
 
  tab = 0
  constructor(private dialogService: DialogService, pageTitle: PageTitleService){
   pageTitle.setTitle({ title: "Orders", description: "Manage your orders" })
  }

  newTask(n: number){
    this.dialogService.showDialog(NewTaskModal)?.subscribe({
      next: x =>{
        // reload the data if necessary
      }
    })
  }

  switchTab(index: number){
    this.tab = index
  }
}
