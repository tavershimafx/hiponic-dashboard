import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarService } from '@services/sidebar';
import { isInbound } from '@services/utilities';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @ViewChild("aside", { static: true }) aside!: ElementRef
    constructor(private sidebar: SidebarService){
    this.collapse = this.collapse.bind(this)
    sidebar.sidebar.subscribe({
      next: (x) =>{
          if (!x){
            this.aside.nativeElement.classList.add("collapsed-nav")
          }
      }
  })
  }

  expandSidebar(e:MouseEvent){
    if (!this.sidebar.sidebarOpen){
      this.sidebar.toggleSidebar()
      this.aside.nativeElement.classList.remove("collapsed-nav")
    }else if (this.sidebar.sidebarOpen && !this.isBound(e)){
      this.sidebar.toggleSidebar()
    }
  }
  
    collapse(e:MouseEvent){
      if (!this.isBound(e)){
        this.aside.nativeElement.style.width = "100%"
        this.aside.nativeElement.classList.add("collapsed-nav")
        setTimeout(() => {
          window.removeEventListener("click", this.collapse)
        }, 50);
      }
    }

    private isBound(e:MouseEvent) :boolean{
      let el = this.aside.nativeElement.getBoundingClientRect()
      return isInbound(el.top, el.left, el.bottom, el.right, e.clientX, e.clientY)
    }
}
