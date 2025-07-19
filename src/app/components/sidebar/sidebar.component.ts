import { Component } from '@angular/core';
import { ISidebarItem } from '@models/models';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  sidebarItems: ISidebarItem[] = [
    { name: "Dashboard", iconClass: "apps", url: "/dashboard" },
    { name: "Projects", iconClass: "check_box", url: "/dashboard",
      children: [
        { name: "Tasks", iconClass: "apps", url: "/dashboard/tasks" },
        { name: "Message", iconClass: "apps", url: "/dashboard/tasks/messages" },
        { name: "Goals", iconClass: "apps", url: "/dashboard/tasks/goals" }
      ]
     },
    { name: "Ecommerce", iconClass: "shopping_cart", url: "dashboard",
      children:[
        { name: "Analytics", iconClass: "apps", url: "/dashboard/ecommerce" },
        { name: "Orders", iconClass: "apps", url: "/dashboard/ecommerce/orders" },
        { name: "Products", iconClass: "apps", url: "/dashboard/ecommerce/products" },
        { name: "Customers", iconClass: "apps", url: "/dashboard/ecommerce/customers" }
      ]
     },
    { name: "Mail", iconClass: "mail", url: "dashboard",
      children:[
        { name: "Inbox", iconClass: "apps", url: "dashboard" },
        { name: "Sent Mail", iconClass: "apps", url: "dashboard" },
        { name: "Favorites", iconClass: "apps", url: "dashboard" },
        { name: "Drafts", iconClass: "apps", url: "dashboard" },
        { name: "Spam", iconClass: "apps", url: "dashboard" },
        { name: "Trash", iconClass: "apps", url: "dashboard" }
      ]
     },
    { name: "Work", iconClass: "work", url: "dashboard",
      children: [
        { name: "Overview", iconClass: "apps", url: "dashboard" },
        { name: "Job Search", iconClass: "apps", url: "dashboard" },
        { name: "Schedule", iconClass: "apps", url: "dashboard" },
        { name: "History", iconClass: "apps", url: "dashboard" },
        { name: "Events", iconClass: "apps", url: "dashboard" },
        { name: "Message", iconClass: "apps", url: "dashboard" }
      ]
     },
    { name: "Uba", iconClass: "add_moderator", url: "dashboard",
      children: [
        { name: "Overview", iconClass: "apps", url: "/dashboard/uba" },
        { name: "Transactions", iconClass: "apps", url: "/dashboard/uba/transactions" },
        { name: "Approvals", iconClass: "apps", url: "/dashboard/uba/approvals" },
        { name: "Users", iconClass: "apps", url: "/dashboard/uba/users" },
        { name: "Roles", iconClass: "apps", url: "/dashboard/uba/roles" },
        { name: "Audit", iconClass: "apps", url: "/dashboard/uba/audit" }
      ]
     },
    { name: "Account", iconClass: "account_circle", url: "/dashboard/account" },
    { name: "Gallery", iconClass: "account_circle", url: "/dashboard/account/gallery" },
  ]
    constructor(){
    
  }
  
    
}
