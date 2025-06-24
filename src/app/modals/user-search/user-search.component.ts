import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { roles } from '@store/faker';

@Component({
  selector: 'user-search',
  standalone: false,
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})
export class UserSearchModal{
  /**
   *
   */
  constructor(private dialogService: DialogService) {
   
  }

  roles = roles.map((r) => { return { key: r.id, value: r.name}})
  matchType = [ { key: "exact", value: "Exact"}, { key: "contains", value: "Contains"}]
  predicates = [ { key: "or", value: "OR"}, { key: "and", value: "AND"}]
  userStatus = [ { key: "active", value: "Active"}, { key: "Inactive", value: "InActive"}, 
    { key: "deleted", value: "Deleted"}, { key: "suspeded", value: "Suspeded"},
    { key: "flagged", value: "Flagged"}
  ]

  closeDialog(){
    this.dialogService.closeDialog()
  }

  next(){
    this.dialogService.showDialog("This is the value from user search")
  }
}
