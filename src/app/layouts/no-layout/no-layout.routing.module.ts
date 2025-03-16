import { NgModule } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: ()=> import("@pages/authentication/auth.module").then(k => k.AuthModule) }
]

@NgModule({
  imports: [],
  exports: [],
  providers: [provideRouter(routes)]
})
export class NoLayoutRoutingModule {
  
}
