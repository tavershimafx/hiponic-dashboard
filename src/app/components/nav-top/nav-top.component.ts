import { Component  } from '@angular/core';
import { PageTitleService } from '@services/page-title.service';
import { SidebarService } from '@services/sidebar';

@Component({
  selector: 'nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent {

  constructor(private sidebarService: SidebarService, public pageTitle: PageTitleService){
   
  }

  toggleSidebar(){
    this.sidebarService.toggleSidebar()
  }

  settings(item: string){
    console.log("I am clicked", item)
  }
}
