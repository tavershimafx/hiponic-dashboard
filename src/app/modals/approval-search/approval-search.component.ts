import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { roles } from '@store/faker';
import { Options } from '@angular-slider/ngx-slider';
import { FileService } from '@services/file-download';

@Component({
  selector: 'approval-search',
  standalone: false,
  templateUrl: './approval-search.component.html',
  styleUrl: './approval-search.component.css'
})
export class ApprovalSearchModal{
  /**
   *
   */
  constructor(private dialogService: DialogService, private fileService: FileService) {
   
  }
minValue: number = 50;
  maxValue: number = 200;
  ceil: number = 10000
  options: Options = {
    floor: 0,
    ceil: this.ceil
  };

  export?: string
  roles = roles.map((r) => { return { key: r.id, value: r.name}})
  matchType = [ { key: "exact", value: "Exact"}, { key: "contains", value: "Contains"}]
  predicates = [ { key: "or", value: "OR"}, { key: "and", value: "AND"}]
  logicPredicates = [ { key: "or", value: "LESS"}, { key: "and", value: "GREATER"}, { key: "and", value: "EQUAL"}]
  exportTypes = [ { key: "excel", value: "Excel"}, { key: "pdf", value: "PDF"}]
  userStatus = [ { key: "Approved", value: "Approved"}, { key: "Declined", value: "Declined"}, 
    { key: "Pending", value: "Pending"}, { key: "flagged", value: "Flagged"}
  ]
  sources = [ { key: "or", value: "Finacle"}, { key: "and", value: "Tellworld"},
    { key: "and", value: "NEFT_NIP"}, { key: "and", value: "RTGS"},
    { key: "and", value: "CRP"}, { key: "and", value: "Pensions"},
    { key: "and", value: "GTP"}, { key: "and", value: "NAPs"}
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
