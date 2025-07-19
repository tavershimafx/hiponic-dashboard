import { NgModule } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "gallery", component: GalleryComponent },
]

@NgModule({
  imports: [],
  exports: [],
  providers: [provideRouter(routes)]
})
export class AccountRoutingModule {
  
}
