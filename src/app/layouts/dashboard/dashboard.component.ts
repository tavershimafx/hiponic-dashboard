import { Component, ComponentRef, ElementRef, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';
import { DialogService } from '@services/dialog-service';
import { SidebarService } from '@services/sidebar';
import { isInbound } from '@services/utilities';

@Component({
  selector: 'dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardLayoutComponent implements OnDestroy {
  @ViewChild("sidebar", { static: true }) sidebar!: ElementRef
  isLoading: boolean = false

  activeDialog?: ComponentRef<any>
  constructor(private sidebarService: SidebarService, dialogService: DialogService,
    container: ViewContainerRef, router: Router
  ){
    this.mouseEvent = this.mouseEvent.bind(this)
    sidebarService.sidebar.subscribe({
      next: x =>{
        if (x){
          this.sidebar.nativeElement.classList.remove("out")
          this.sidebar.nativeElement.classList.add("in")

          // this is due to the delay caused by the 0.5s animation
          setTimeout(() => {
            window.addEventListener("click", this.mouseEvent)
          }, 50);

        }else{
          window.removeEventListener("click", this.mouseEvent)
          this.sidebar.nativeElement.classList.remove("in")
          this.sidebar.nativeElement.classList.add("out")
        }
      }
    })

    dialogService.dialog.subscribe({
      next: n =>{
        if(n == null || typeof(n) != typeof(Component) && this.activeDialog != undefined){
          this.activeDialog?.destroy()
          this.activeDialog = undefined
        }else if(typeof(n) == typeof(Component)){
          this.activeDialog = container.createComponent<any>(n)
        }
      }
    })

    dialogService.loadingObservable.subscribe({
      next: n =>{
        this.isLoading = n? true : false
      }
    })

    router.events.subscribe((event:any) => {
      if (event instanceof NavigationStart) {
        dialogService.toggleAsyncMode(true);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        dialogService.toggleAsyncMode(false);
      }
    });
  

  }

  mouseEvent(e:MouseEvent){
    let el = this.sidebar.nativeElement.getBoundingClientRect()
    let b = isInbound(el.top, el.left, el.bottom, el.right, e.clientX, e.clientY)
    if (!b){
      this.sidebarService.toggleSidebar()
      setTimeout(() => {
        window.removeEventListener("click", this.mouseEvent)
      }, 50);
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener("click", this.mouseEvent)
  }

}
