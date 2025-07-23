import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { NewTaskModal } from '@modals/new-task/new-task.component';
import { PageTitleService } from '@services/page-title.service';
import { IAuditLog, IKeyValue } from '@models/models';
import { randomAudits } from '@store/faker';
import { classes } from '@directives/badge.directive';
import { LoadingDialogComponent } from '@components/loading-dialog/loading.component';
import { ApprovalSearchModal } from '@modals/approval-search/approval-search.component';
import { AuditSearchModal } from '@modals/audit-search/audit-search.component';
import { AuditDetailsModal } from '@modals/audit-details/audit-details.component';

@Component({
  selector: 'audit',
  standalone: false,
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.css'
})
export class AuditComponent {

  //BTN/90/DE189044
  logs: IAuditLog[] = randomAudits
  lgss: IAuditLog[] = randomAudits

  tab = 0
  evaluate: Function = () => { }
  filterValues: IKeyValue[] = [
    { key: "ddd", value: "Alphabetical A-Z" },
    { key: "ddd", value: "Alphabetical Z-A" },
    { key: "ddd", value: "Completed" },
    { key: "ddd", value: "Active" },
    { key: "ddd", value: "Date Created" },
  ]

  constructor(private dialogService: DialogService, pageTitle: PageTitleService) {
    pageTitle.setTitle({ title: "Audit Logs", description: "View and inspect user activities" })
    this.viewAudit()
  }


  search(q: any) {
    if (q) {
      let filter = `this.logs = this.lgss.filter(k => `
      if (q.query && q.query.trim() != "") {
        q.query = q.query.toLowerCase()
        filter += `(k.action.toLowerCase().includes('${q.query.toLowerCase()}') || 
              k.username.toLowerCase().includes('${q.query.toLowerCase()}') || k.description.toLowerCase().includes('${q.query.toLowerCase()}'))`
      }

      if (q.startDate && q.startDate.trim() != "") {
        let d = new Date(q.startDate)
        filter += `${filter.trim().endsWith(">") ? "" : "&&"} k.date.getTime() >= ${d.getTime()}`
      }

      if (q.endDate && q.endDate.trim() != "") {
        let d = new Date(q.endDate)
        filter += `${filter.trim().endsWith(">") ? "" : "&&"} k.date.getTime() <= ${d.getTime()}`
      }

      filter += filter.trim().endsWith(">") ? "k)" : ")"
      this.evaluate = new Function(filter);
      this.evaluate()
      return
    }

    this.logs = randomAudits
  }

  searchAll(q: any) {
    this.showLoading()
    this.logs = randomAudits
  }

  advancedSearch() {
    this.dialogService.showDialog(AuditSearchModal)?.subscribe({
      next: x => {
        if (x != true) {
          console.log("audit component got", x)
          // send to backend
          this.showLoading()

        }
      }
    })
  }

  showLoading() {
    this.dialogService.toggleAsyncMode()
      setTimeout(() => {
        this.dialogService.toggleAsyncMode(false)
      }, 4000);
  }

  viewAudit() {
    this.dialogService.showDialog(AuditDetailsModal)?.subscribe({
      next: x => {
        if (x != true) {
          console.log("audit details", x)
          // send to backend
        }
      }
    })
  }
  switchTab(index: number) {
    this.tab = index
  }

  checkAll(event: any) {
    this.logs.forEach((m) => m.selected = event.target.checked)
  }

  getStatusString(status: number) {
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

  getStatusClass(action: string): classes {

    if (action.includes("Fail")) return "danger"
    if (action.includes("Approve")) return "success"
    if (action.includes("Success")) return "success"
    if (action.includes("Update")) return "warning"
    if (action.includes("Delete")) return "danger"
    if (action.includes("Assign")) return "info"

    return "info"
  }
}
