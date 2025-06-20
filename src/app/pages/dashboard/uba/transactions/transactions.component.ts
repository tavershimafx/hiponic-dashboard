import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { NewTaskModal } from '@modals/new-task/new-task.component';
import { PageTitleService } from '@services/page-title.service';
import { ITransaction, TransactionStatus, TransactionType } from '@models/models';
import { transactions } from '@store/faker';
import { classes } from '@directives/badge.directive';

@Component({
  selector: 'transactions',
  standalone: false,
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent{
 
  //BTN/90/DE189044
  transactions: ITransaction[] = transactions

  tab = 0
  constructor(private dialogService: DialogService, pageTitle: PageTitleService){
   pageTitle.setTitle({ title: "Transactions", description: "Recent transactions" })
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

  checkAll(event:any){
    if (this.tab == 0){
      this.transactions.forEach((m) => m.selected = event.target.checked)
    }
    if (this.tab == 1){
      this.transactions.forEach((m) => m.selected = false)

      this.transactions.filter(n => n.status == 1)
      .forEach((m) => m.selected = event.target.checked)
    }
    if (this.tab == 2){
      this.transactions.forEach((m) => m.selected = false)

      this.transactions.filter(n => n.status == 3)
      .forEach((m) => m.selected = event.target.checked)
    }
    
  }

  getVerified(){
    return this.transactions.filter(n => n.status == 1)
  }

  getFlagged(){
    return this.transactions.filter(n => n.status == 3)
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
