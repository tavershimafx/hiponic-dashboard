import { NgModule } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from '@pages/authentication/login/login.component';
import { RegisterComponent } from '@pages/authentication/register/register.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: "", component: AuthComponent, children:[
    { path: "", component: LoginComponent },
    { path: "register", component: RegisterComponent },
  ]},
]

@NgModule({
  imports: [],
  exports: [],
  providers: [provideRouter(routes)]
})
export class AuthRoutingModule {
  
}
