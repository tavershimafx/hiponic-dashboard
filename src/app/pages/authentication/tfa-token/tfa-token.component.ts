import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomFormControl, CustomFormGroup } from '@extensions/control.extensions';
import { numberValidator } from '@validators/input.validators';

@Component({
  selector: 'tfa-token',
  standalone: false,
  templateUrl: './tfa-token.component.html',
  styleUrls: ['../login/login.component.css', './tfa-token.component.css']
})
export class TfaTokenComponent {
  constructor(private router: Router){
    this.loginForm.valueChanges.subscribe({
      next: (e) =>{
        this.isSubmitting = false
      }
    })
  }

  isSubmitting = false

  loginForm: CustomFormGroup = new CustomFormGroup({
    "token": new CustomFormControl("token", "123456", "a", Validators.compose([Validators.required, 
      numberValidator(), Validators.minLength(6), Validators.maxLength(6)]))
  })

  submitLogin(){
    this.isSubmitting = true
    if(!this.loginForm.valid){
      return
    }

    this.router.navigateByUrl("/dashboard/uba")
  }
}
