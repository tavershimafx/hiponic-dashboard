import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { NewUserModal } from '@modals/new-user/new-user.component';
import { PageTitleService } from '@services/page-title.service';
import { IKeyValue, IUser } from '@models/models';
import { users } from '@store/faker';
import { classes } from '@directives/badge.directive';
import { UserSearchModal } from '@modals/user-search/user-search.component';
import { LoadingDialogComponent } from '@components/loading-dialog/loading.component';

@Component({
  selector: 'users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent{
 
  filterValues: IKeyValue[] = [
      { key: "ddd", value: "Alphabetical A-Z" },
      { key: "ddd", value: "Alphabetical Z-A" },
      { key: "ddd", value: "Completed" },
      { key: "ddd", value: "Active" },
      { key: "ddd", value: "Date Created" },
    ]

  users: IUser[] = users
  ress: IUser[] = users

  tab = 0
  evaluate: Function = ()=> {}

  constructor(private dialogService: DialogService, pageTitle: PageTitleService){
  this.evaluate = this.evaluate.bind(this)
   pageTitle.setTitle({ title: "Users", description: "Manage users and privileges" })
  }

  newUser(){
    this.dialogService.showDialog(NewUserModal)?.subscribe({
      next: x =>{
        // reload the data if necessary
      }
    })
  }

  advancedSearch(){
    this.dialogService.showDialog(UserSearchModal)?.subscribe({
      next: x =>{
        if(x != true){
          console.log("user component got", x)
          // send to backend
          this.showLoading()
        }
      }
    })
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
    }

  switchTab(index: number){
    this.tab = index
  }

  checkAll(event: any){
    this.users.forEach((m) => m.selected = event.target.checked)
  }

  search(q: any){
    if(q){
      let filter = `this.users = this.ress.filter(k => `
        if (q.query && q.query.trim() != ""){
          q.query = q.query.toLowerCase()
          filter += `(k.accountName.toLowerCase().includes('${q.query.toLowerCase()}') || 
          k.email.toLowerCase().includes('${q.query.toLowerCase()}') || k.username.toLowerCase().includes('${q.query.toLowerCase()}'))`
        }
        
        if (q.startDate && q.startDate.trim() != ""){
          let d = new Date(q.startDate)
          filter += `${filter.trim().endsWith(">") ? "" : "&&"} k.registeredAt.getTime() >= ${d.getTime()}`
        }

        if (q.endDate && q.endDate.trim() != ""){
          let d = new Date(q.endDate)
          filter += `${filter.trim().endsWith(">") ? "" : "&&"} k.registeredAt.getTime() <= ${d.getTime()}`
        }

        filter += filter.trim().endsWith(">") ? "k)" : ")"
        this.evaluate = new Function(filter);
        this.evaluate()
      return
    }

    this.users = users
  }

  searchAll(q: any){
    this.showLoading()
    this.users = users
  }

  getStatusString(status: number){
    switch (status) {
      case 0:
        return "Active"
      case 1:
        return "InActive"
      case 2:
        return "Suspended"
      case 3:
        return "Deleted"
      case 4:
        return "Flagged"
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
      case 4:
        return "danger"
      default:
        return "info";
    }
  }
}
