import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomFormControl, CustomFormGroup } from '@extensions/control.extensions';

@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router){
    this.loginForm.valueChanges.subscribe({
      next: (e) =>{
        this.isSubmitting = false
      }
    })
  }

  isSubmitting = false

  loginForm: CustomFormGroup = new CustomFormGroup({
    "email": new CustomFormControl("email", "abc@example.com", "an", Validators.compose([Validators.required])),
    "password": new CustomFormControl("password", "Tavershima", "a", Validators.compose([Validators.required])),
    "rememberMe": new CustomFormControl("", "", "")
  })

  submitLogin(){
    this.isSubmitting = true
    if(!this.loginForm.valid){
      return
    }

    this.router.navigateByUrl("/tfa-token")
  }
}
