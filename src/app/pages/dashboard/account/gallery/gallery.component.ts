import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageTitleService } from '@services/page-title.service';

@Component({
  selector: 'gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent{
  
  pictures = [ "../../../../../assets/images/210.png",
    "../../../../../assets/images/pictures/6951938_6943881292.jpg",
    "../../../../../assets/images/pictures/241967113.jpg",
    "../../../../../assets/images/pictures/3881292600537277_n.jpg",
    "../../../../../assets/images/pictures/design-21-2.jpg",
    "../../../../../assets/images/pictures/unsplash_c1.png",
    "../../../../../assets/images/pictures/unsplash_Xe.png",
    "../../../../../assets/images/210.png",
    "../../../../../assets/images/pictures/6951938_6943881292.jpg",
    "../../../../../assets/images/pictures/241967113.jpg",
    "../../../../../assets/images/pictures/3881292600537277_n.jpg",
    "../../../../../assets/images/pictures/design-21-2.jpg",
    "../../../../../assets/images/pictures/unsplash_c1.png",
    "../../../../../assets/images/pictures/unsplash_Xe.png",
  ]
  constructor(pageTitle: PageTitleService){
   
    pageTitle.setTitle({ title: "User Account" })
  }
}
