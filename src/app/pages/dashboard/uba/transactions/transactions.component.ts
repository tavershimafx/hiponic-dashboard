import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { NewTaskModal } from '@modals/new-task/new-task.component';
import { PageTitleService } from '@services/page-title.service';
import { IKeyValue, ITransaction } from '@models/models';
import { transactions } from '@store/faker';
import { classes } from '@directives/badge.directive';
import { TransactionSearchModal } from '@modals/transaction-search/transaction-search.component';
import { LoadingDialogComponent } from '@components/loading-dialog/loading.component';

@Component({
  selector: 'transactions',
  standalone: false,
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent{
 
  //BTN/90/DE189044
  transactions: ITransaction[] = transactions
  tsss: ITransaction[] = transactions

  tab = 0
  evaluate: Function = ()=> {}
    filterValues: IKeyValue[] = [
        { key: "ddd", value: "Alphabetical A-Z" },
        { key: "ddd", value: "Alphabetical Z-A" },
        { key: "ddd", value: "Completed" },
        { key: "ddd", value: "Active" },
        { key: "ddd", value: "Date Created" },
      ]
  
  constructor(private dialogService: DialogService, pageTitle: PageTitleService){
    this.evaluate = this.evaluate.bind(this)
   pageTitle.setTitle({ title: "Transactions", description: "Recent transactions" })
  }

  advancedSearch(){
      this.dialogService.showDialog(TransactionSearchModal)?.subscribe({
        next: x =>{
          if(x != true){
            console.log("transaction component got", x)
            // send to backend
            this.showLoading()
          }
        }
      })
  }
  
    search(q: any){
      if(q){
        let filter = `this.transactions = this.tsss.filter(k => `
          if (q.query && q.query.trim() != ""){
            q.query = q.query.toLowerCase()
            filter += `(k.accountName.toLowerCase().includes('${q.query.toLowerCase()}') || 
            k.accountNumber.toLowerCase().includes('${q.query.toLowerCase()}') || k.description.toLowerCase().includes('${q.query.toLowerCase()}'))`
          }
          
          if (q.startDate && q.startDate.trim() != ""){
            let d = new Date(q.startDate)
            filter += `${filter.trim().endsWith(">") ? "" : "&&"} k.date.getTime() >= ${d.getTime()}`
          }
  
          if (q.endDate && q.endDate.trim() != ""){
            let d = new Date(q.endDate)
            filter += `${filter.trim().endsWith(">") ? "" : "&&"} k.date.getTime() <= ${d.getTime()}`
          }
  
          filter += filter.trim().endsWith(">") ? "k)" : ")"
          this.evaluate = new Function(filter);
          this.evaluate()
        return
      }
  
      this.transactions = transactions
    }
  
    searchAll(q: any){
      this.showLoading()
      this.transactions = transactions
    }
    
  showLoading(){
      this.dialogService.showDialog(LoadingDialogComponent)?.subscribe({
        next: x =>{
          if(x != true){
            console.log("loading ended", x)
            // send to backend
          }
        }
      })
      setTimeout(() => {
        this.dialogService.closeDialog()
      }, 2000);
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
