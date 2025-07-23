import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { PageTitleService } from '@services/page-title.service';
import { LoadingDialogComponent } from '@components/loading-dialog/loading.component';
import { filterValues, orders } from '@store/faker';
import { classes } from '@directives/badge.directive';

@Component({
  selector: 'orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent{
 
  tab = 0
  filterValues = filterValues
  orders = orders
  odss = orders
  evaluate: Function = ()=> {}

  constructor(private dialogService: DialogService, pageTitle: PageTitleService){
   pageTitle.setTitle({ title: "Orders", description: "Manage your orders" })
  }

  switchTab(index: number){
    this.tab = index
  }
  
  search(q: any){
    if(q){
      let filter = `this.orders = this.odss.filter(k => `
        if (q.query && q.query.trim() != ""){
          q.query = q.query.toLowerCase()
          filter += `(k.id.toLowerCase().includes('${q.query.toLowerCase()}') || 
          k.product.toLowerCase().includes('${q.query.toLowerCase()}'))`
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

    this.orders = orders
  }

  searchAll(q: any){
    this.showLoading()
    this.orders = orders
  }
      
  showLoading(){
      this.dialogService.toggleAsyncMode()
      setTimeout(() => {
        this.dialogService.toggleAsyncMode(false)
      }, 4000);
  }

  checkAll(event:any){
    this.orders.forEach((m) => m.selected = event.target.checked)
  }
    
  getStatusString(status: number){
    switch (status) {
      case 0:
        return "Pending"
      case 1:
        return "Payment"
      case 2:
        return "Shipping"
      case 3:
        return "Completed"
      case 4:
        return "Cancelled"
      case 5:
        return "Closed"
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
        return "info"
      case 3:
        return "success"
      case 4:
        return "warning"
      case 5:
        return "danger"
      default:
        return "info";
    }
  }
}
