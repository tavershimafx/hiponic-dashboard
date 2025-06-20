import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { NewUserModal } from '@modals/new-user/new-user.component';
import { PageTitleService } from '@services/page-title.service';
import { IUser } from '@models/models';
import { users } from '@store/faker';
import { classes } from '@directives/badge.directive';

@Component({
  selector: 'users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent{
 
  //BTN/90/DE189044
  users: IUser[] = users

  tab = 0
  constructor(private dialogService: DialogService, pageTitle: PageTitleService){
   pageTitle.setTitle({ title: "Users", description: "Manage users and privileges" })
  }

  newUser(){
    this.dialogService.showDialog(NewUserModal)?.subscribe({
      next: x =>{
        // reload the data if necessary
      }
    })
  }

  switchTab(index: number){
    this.tab = index
  }

  checkAll(event:any){
    this.users.forEach((m) => m.selected = event.target.checked)
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
