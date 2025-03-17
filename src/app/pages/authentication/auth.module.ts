import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import ComponentsModule from '../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const components = [
  AuthComponent,
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent,
  VerifyEmailComponent
]

@NgModule({
  declarations: [ ...components],
  imports: [RouterModule, AuthRoutingModule, 
    ComponentsModule, FormsModule, ReactiveFormsModule],
  exports: []
})
export class AuthModule {
  
}
