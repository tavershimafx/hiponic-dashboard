import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';
import { roles } from '@store/faker';

@Component({
  selector: 'audit-details',
  standalone: false,
  templateUrl: './audit-details.component.html',
  styleUrl: './audit-details.component.css'
})
export class AuditDetailsModal{
  
  prevState = `{"UserName":"User BTN/90/39057675","Roles":"Admin","Action":"Read","Url":"https://e-callover.ubagroup.com/user-view/update?id=103&ps=10&p=1","Origin":"https://e-callover.ubagroup.com","Ip":"206.46.20.1","Description":"User BTN/90/39057675 updated properties of a user","Entity":"Categories","PreviousState":null,"NewState":null}`
  constructor(private dialogService: DialogService) {
   
  }



  closeDialog(){
    this.dialogService.closeDialog()
  }

  next(){
    this.dialogService.showDialog("This is the value from user search")
  }
}
