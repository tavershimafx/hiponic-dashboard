import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomFormControl, CustomFormGroup } from '@extensions/control.extensions';

@Component({
  selector: 'forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../login/login.component.css', './forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private router: Router){
    this.loginForm.valueChanges.subscribe({
      next: (e) =>{
        this.isSubmitting = false
      }
    })
  }

  isSubmitting = false

  loginForm: CustomFormGroup = new CustomFormGroup({
    "email": new CustomFormControl("email", "", "an", Validators.compose([Validators.required]))
  })

  submitLogin(){
    this.isSubmitting = true
    if(!this.loginForm.valid){
      return
    }

    this.router.navigateByUrl("/")
  }
}
