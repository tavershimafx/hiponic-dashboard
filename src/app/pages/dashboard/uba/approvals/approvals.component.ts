import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { NewTaskModal } from '@modals/new-task/new-task.component';
import { PageTitleService } from '@services/page-title.service';
import { IApproval, IKeyValue } from '@models/models';
import { approvals } from '@store/faker';
import { classes } from '@directives/badge.directive';
import { ApprovalSearchModal } from '@modals/approval-search/approval-search.component';
import { LoadingDialogComponent } from '@components/loading-dialog/loading.component';

@Component({
  selector: 'approvals',
  standalone: false,
  templateUrl: './approvals.component.html',
  styleUrl: './approvals.component.css'
})
export class ApprovalsComponent{
 
  approvals: IApproval[] = approvals
  apsss: IApproval[] = approvals

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
   pageTitle.setTitle({ title: "Approval Requests", description: "Manage Approval workflow" })
  }
  
    search(q: any){
      if(q){
        let filter = `this.approvals = this.apsss.filter(k => `
          if (q.query && q.query.trim() != ""){
            q.query = q.query.toLowerCase()
            filter += `(k.initiator.toLowerCase().includes('${q.query.toLowerCase()}') || 
            k.currentUser.toLowerCase().includes('${q.query.toLowerCase()}') || k.approvalType.toLowerCase().includes('${q.query.toLowerCase()}'))`
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
  
      this.approvals = approvals
    }
    
      searchAll(q: any){
        this.showLoading()
        this.approvals = approvals
      }
  
  advancedSearch(){
      this.dialogService.showDialog(ApprovalSearchModal)?.subscribe({
        next: x =>{
          if(x != true){
            console.log("approval component got", x)
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
