import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomFormControl, CustomFormGroup } from '@extensions/control.extensions';

@Component({
  selector: 'register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css', './register.component.css']
})
export class RegisterComponent {
   constructor(private router: Router){
      this.registerForm.valueChanges.subscribe({
        next: (e) =>{
          this.isSubmitting = false
        }
      })
    }
  
    isSubmitting = false
  
    registerForm: CustomFormGroup = new CustomFormGroup({
      "username": new CustomFormControl("username", "", "an", Validators.compose([Validators.required])),
      "email": new CustomFormControl("email", "", "an", Validators.compose([Validators.required, Validators.email])),
      "password": new CustomFormControl("password", "", "a", Validators.compose([Validators.required, Validators.minLength(8)])),
      "acceptTerms": new CustomFormControl("", "", "")
    })
  
    submitLogin(){
      this.isSubmitting = true
      if(!this.registerForm.valid){
        return
      }

      this.router.navigateByUrl("/verify-email")
    }
}
