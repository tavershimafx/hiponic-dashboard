import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { NewTaskModal } from '@modals/new-task/new-task.component';
import { PageTitleService } from '@services/page-title.service';
import { IRole } from '@models/models';
import { roles } from '@store/faker';
import { classes } from '@directives/badge.directive';

@Component({
  selector: 'roles',
  standalone: false,
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent{
 
  //BTN/90/DE189044
  roles: IRole[] = roles

  tab = 0
  constructor(private dialogService: DialogService, pageTitle: PageTitleService){
   pageTitle.setTitle({ title: "Roles", description: "Manage user roles" })
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
    this.roles.forEach((m) => m.selected = event.target.checked)
  }

  getStatusString(status: number){
    switch (status) {
      case 0:
        return "Active"
      case 1:
        return "Suspended"
      case 2:
        return "Deleted"
      case 3:
      default:
        return "";
    }
  }

  getStatusClass(status: number): classes{
    switch (status) {
      case 0:
        return "success"
      case 1:
        return "warning"
      case 2:
        return "danger"
      default:
        return "info";
    }
  }
}
