import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { FileService } from '@services/file-download';
import { roles } from '@store/faker';

@Component({
  selector: 'user-search',
  standalone: false,
  templateUrl: './user-search.component.html',
  styleUrl: '../modals.basic.css'
})
export class UserSearchModal{
  /**
   *
   */
  constructor(private dialogService: DialogService, private fileService: FileService) {
   
  }

  export?: string
  exportTypes = [ { key: "excel", value: "Excel"}, { key: "pdf", value: "PDF"}]
  roles = roles.map((r) => { return { key: r.id, value: r.name}})
  matchType = [ { key: "exact", value: "Exact"}, { key: "contains", value: "Contains"}]
  predicates = [ { key: "or", value: "OR"}, { key: "and", value: "AND"}]
  userStatus = [ { key: "active", value: "Active"}, { key: "Inactive", value: "InActive"}, 
    { key: "deleted", value: "Deleted"}, { key: "suspeded", value: "Suspended"},
    { key: "flagged", value: "Flagged"}
  ]

  closeDialog(){
    this.dialogService.closeDialog()
  }

  next(){
    this.dialogService.showDialog("This is the value from user search")
  }
  
  download(event: string){
    if(event == "excel"){
      this.fileService.downloadLocal("/assets/files/Ecallover_Export_Styled.xlsx")
    }else{
      this.fileService.downloadLocal("/assets/files/Ecallover_Export_Sample.pdf")
    }
  }
}
