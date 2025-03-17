import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomFormControl, CustomFormGroup } from '@extensions/control.extensions';

@Component({
  selector: 'verify-email',
  standalone: false,
  templateUrl: './verify-email.component.html',
  styleUrls: ['../login/login.component.css', './verify-email.component.css']
})
export class VerifyEmailComponent {
  constructor(private router: Router){
   
  }

  submitLogin(){
    

    this.router.navigateByUrl("/dashboard")
  }
}
