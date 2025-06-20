import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { NewTaskModal } from '@modals/new-task/new-task.component';
import { PageTitleService } from '@services/page-title.service';
import { IAuditLog } from '@models/models';
import { randomAudits } from '@store/faker';
import { classes } from '@directives/badge.directive';

@Component({
  selector: 'audit',
  standalone: false,
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.css'
})
export class AuditComponent{
 
  //BTN/90/DE189044
  logs: IAuditLog[] = randomAudits

  tab = 0
  constructor(private dialogService: DialogService, pageTitle: PageTitleService){
   pageTitle.setTitle({ title: "Audit Logs", description: "View and inspect user activities" })
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
    this.logs.forEach((m) => m.selected = event.target.checked)
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

  auditActions = [
  "Login Fail", "Login Success",
  "Search Users", "View User", "Update User", "Delete User",
  "Create Role", "Update Role", "Delete Role",
  "Approve privilege", "Assign Privilege",
  "Request Approval", "Approve Step1", "Approve Credit"
]

  getStatusClass(action: string): classes{

    if (action.includes("Fail")) return "danger"
    if (action.includes("Approve")) return "success"
    if (action.includes("Success")) return "success"
    if (action.includes("Update")) return "warning"
    if (action.includes("Delete")) return "danger"
    if (action.includes("Assign")) return "info"

    return "info"
  }
}
