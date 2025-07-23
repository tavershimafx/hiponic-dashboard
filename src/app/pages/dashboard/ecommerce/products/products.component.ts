import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { PageTitleService } from '@services/page-title.service';
import { LoadingDialogComponent } from '@components/loading-dialog/loading.component';
import { filterValues, products } from '@store/faker';
import { classes } from '@directives/badge.directive';
import { NewProductModal } from '@modals/new-product/new-product.component';

@Component({
  selector: 'products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent{
 
  filterValues = filterValues
  products = products
  psss = products
  evaluate: Function = ()=> {}

  constructor(private dialogService: DialogService, pageTitle: PageTitleService){
   pageTitle.setTitle({ title: "Products", description: "Manage products" })
  }

      search(q: any){
        if(q){
          let filter = `this.products = this.psss.filter(k => `
            if (q.query && q.query.trim() != ""){
              q.query = q.query.toLowerCase()
              filter += `(k.name.toLowerCase().includes('${q.query.toLowerCase()}'))`
            }
            
            // if (q.startDate && q.startDate.trim() != ""){
            //   let d = new Date(q.startDate)
            //   filter += `${filter.trim().endsWith(">") ? "" : "&&"} k.date.getTime() >= ${d.getTime()}`
            // }
    
            // if (q.endDate && q.endDate.trim() != ""){
            //   let d = new Date(q.endDate)
            //   filter += `${filter.trim().endsWith(">") ? "" : "&&"} k.date.getTime() <= ${d.getTime()}`
            // }
    
            filter += filter.trim().endsWith(">") ? "k)" : ")"
            this.evaluate = new Function(filter);
            this.evaluate()
          return
        }
    
        this.products = products
      }
    
      searchAll(q: any){
        this.showLoading()
        this.products = products
      }
      
    showLoading(){
        this.dialogService.toggleAsyncMode()
        setTimeout(() => {
          this.dialogService.toggleAsyncMode(false)
        }, 4000);
    }

  checkAll(event:any){
    this.products.forEach((m) => m.selected = event.target.checked)
  }

  newProduct(){
     this.dialogService.showDialog(NewProductModal)?.subscribe({
          next: x =>{
            if(x != true){
              console.log("new product", x)
              // send to backend
            }
          }
        })
  }

  getStatusString(status: number){
    switch (status) {
      case 0:
        return "Available"
      case 1:
        return "OutofStock"
      case 2:
        return "Suspended"
      case 3:
        return "Deleted"
      default:
        return "";
    }
  }
  
    getStatusClass(status: number): classes{
      switch (status) {
        case 0:
          return "success"
        case 1:
          return "info"
        case 2:
          return "warning"
        case 3:
          return "danger"
        default:
          return "info";
      }
    }
}
