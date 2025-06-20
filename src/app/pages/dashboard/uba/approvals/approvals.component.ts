import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { NewTaskModal } from '@modals/new-task/new-task.component';
import { PageTitleService } from '@services/page-title.service';
import { IApproval } from '@models/models';
import { approvals } from '@store/faker';
import { classes } from '@directives/badge.directive';

@Component({
  selector: 'approvals',
  standalone: false,
  templateUrl: './approvals.component.html',
  styleUrl: './approvals.component.css'
})
export class ApprovalsComponent{
 
  approvals: IApproval[] = approvals

  tab = 0
  constructor(private dialogService: DialogService, pageTitle: PageTitleService){
   pageTitle.setTitle({ title: "Approval Requests", description: "Manage Approval workflow" })
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
    this.approvals.forEach((m) => m.selected = event.target.checked)
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
