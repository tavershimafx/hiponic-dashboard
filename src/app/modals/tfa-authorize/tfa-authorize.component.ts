import { Component } from '@angular/core';
import { DialogService } from '@services/dialog-service';

@Component({
  selector: 'tfa-authorize',
  standalone: false,
  templateUrl: './tfa-authorize.component.html',
  styleUrl: '../modals.basic.css'
})
export class TwoFactorAuthorizeModal{
 

  constructor(private dialogService: DialogService) {
   
  }


  closeDialog(){
    this.dialogService.closeDialog()
  }

  next(){
    this.dialogService.showDialog("This is the value from tfa")
  }
}
