import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { NewTaskModal } from '@modals/new-task/new-task.component';
import { PageTitleService } from '@services/page-title.service';
import { IKeyValue, IRole } from '@models/models';
import { roles } from '@store/faker';
import { classes } from '@directives/badge.directive';
import { ApprovalSearchModal } from '@modals/approval-search/approval-search.component';
import { LoadingDialogComponent } from '@components/loading-dialog/loading.component';
import { RoleDetailsModal } from '@modals/role-details/role-details.component';
import { NewRoleModal } from '@modals/new-role/new-role.component';

@Component({
  selector: 'roles',
  standalone: false,
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  //BTN/90/DE189044
  roles: IRole[] = roles
  rsss: IRole[] = roles

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
    pageTitle.setTitle({ title: "Roles", description: "Manage user roles" })
  }

  search(q: any) {
    if (q) {
      let filter = `this.roles = this.rsss.filter(k => `
      if (q.query && q.query.trim() != "") {
        q.query = q.query.toLowerCase()
        filter += `(k.name.toLowerCase().includes('${q.query.toLowerCase()}') || 
              k.createdBy.toLowerCase().includes('${q.query.toLowerCase()}'))`
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

    this.roles = roles
  }

  searchAll(q: any) {
    this.showLoading()
    this.roles = roles
  }

  newRole(){
    this.dialogService.showDialog(NewRoleModal)?.subscribe({
      next: x => {
        if (x != true) {
          console.log("roles component got", x)
          // send to backend
          this.showLoading()

        }
      }
    })
  }

  advancedSearch() {
    this.dialogService.showDialog(ApprovalSearchModal)?.subscribe({
      next: x => {
        if (x != true) {
          console.log("roles component got", x)
          // send to backend
          this.showLoading()

        }
      }
    })
  }

  advancedRole() {
    this.dialogService.showDialog(RoleDetailsModal)?.subscribe({
      next: x => {
        if (x != true) {
          console.log("roles component got", x)
          // send to backend
          this.showLoading()

        }
      }
    })
  }

  showLoading() {
    this.dialogService.showDialog(LoadingDialogComponent)?.subscribe({
      next: x => {
        if (x != true) {
          console.log("loading ended", x)
          // send to backend
        }
      }
    })
      setTimeout(() => {
        this.dialogService.closeDialog()
      }, 2000);
  }

  switchTab(index: number) {
    this.tab = index
  }

  checkAll(event: any) {
    this.roles.forEach((m) => m.selected = event.target.checked)
  }

  getStatusString(status: number) {
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

  getStatusClass(status: number): classes {
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
