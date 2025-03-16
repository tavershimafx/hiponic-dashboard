import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import ComponentsModule from '../../components/components.module';

const components = [
  AuthComponent,
  LoginComponent,
  RegisterComponent
]

@NgModule({
  declarations: [ ...components],
  imports: [RouterModule, AuthRoutingModule, ComponentsModule],
  exports: []
})
export class AuthModule {
  
}
