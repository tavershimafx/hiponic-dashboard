import { Component  } from '@angular/core';
import { SidebarService } from '@services/sidebar';

@Component({
  selector: 'nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent {

  constructor(private sidebarService: SidebarService){
   
  }

  toggleSidebar(){
    this.sidebarService.toggleSidebar()
  }
}
