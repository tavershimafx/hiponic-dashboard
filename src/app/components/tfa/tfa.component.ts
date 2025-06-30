import { Component } from '@angular/core';
import { TwoFactorAuthorizeModal } from '@modals/tfa-authorize/tfa-authorize.component';
import { DialogService } from '@services/dialog-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tfa',
  templateUrl: './tfa.component.html',
  styleUrls: ['./tfa.component.css']
})
export class TFAComponent {
  
  tfaCompleted: boolean = false
  subscription?: Subscription
  constructor(private dialogService: DialogService){
    this.requestPassword = this.requestPassword.bind(this)
    this.requestPassword()
  }
        
  async requestPassword(){
      this.subscription = this.dialogService.showDialog(TwoFactorAuthorizeModal)?.subscribe({
        next: x =>{
          if(x != true){
            this.tfaCompleted = true
            console.log("tfa dialog closed:", x)
            // send to backend
          }
        }
      })
  }
}
