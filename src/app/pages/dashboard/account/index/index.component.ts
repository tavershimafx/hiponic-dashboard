import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageTitleService } from '@services/page-title.service';

@Component({
  selector: 'index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent{
  
  backImage = 'url(../../../../../assets/images/unsplash.png)'
  profilePicture = "../../../../../assets/images/users/user-1.png"
  constructor(pageTitle: PageTitleService){
   
    pageTitle.setTitle({ title: "User Account" })
  }
}
