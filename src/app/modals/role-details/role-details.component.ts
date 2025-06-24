import { Component } from '@angular/core';
import { IRolePrivilege } from '@models/models';
import { DialogService } from '@services/dialog-service';
import { roles } from '@store/faker';

@Component({
  selector: 'role-details',
  standalone: false,
  templateUrl: './role-details.component.html',
  styleUrl: './role-details.component.css'
})
export class RoleDetailsModal{
  
  privileges: IRolePrivilege =  { 
    roleId: "1234",
      roleName: "Business Operations",
      resources: [
        { id: "1", name: "E-Callover", permissions: { read: false, create: true, update: false, delete: false, export: true, import: false}},
        { id: "2", name: "User & Security", permissions: { read: false, create: false, update: false, delete: false, export: false, import: false}},
        { id: "3", name: "Role Management", permissions: { read: false, create: false, update: true, delete: false, export: false, import: false}},
        { id: "4", name: "Audit Logs", permissions: { read: false, create: false, update: false, delete: false, export: true, import: false}},
        { id: "5", name: "Transactions", permissions: { read: false, create: false, update: false, delete: false, export: false, import: false}},
        { id: "6", name: "Approvals", permissions: { read: false, create: false, update: true, delete: false, export: false, import: false}},
        { id: "7", name: "Configurations", permissions: { read: false, create: false, update: false, delete: false, export: false, import: false}},
        { id: "8", name: "Report Management", permissions: { read: false, create: false, update: false, delete: false, export: false, import: false}},
        { id: "9", name: " Management", permissions: { read: false, create: false, update: false, delete: false, export: false, import: false}},
        { id: "10", name: " Management", permissions: { read: false, create: false, update: false, delete: false, export: false, import: false}},
        { id: "11", name: " Management", permissions: { read: false, create: false, update: false, delete: false, export: false, import: false}},
      ]
    }
  
  constructor(private dialogService: DialogService) {
   
  }


  closeDialog(){
    this.dialogService.closeDialog()
  }

  next(){
    this.dialogService.showDialog("This is the value from user search")
  }
}
