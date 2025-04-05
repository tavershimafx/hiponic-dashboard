import { Injectable } from "@angular/core";
import { Observable, Subject, Subscriber } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SidebarService{
    sidebarOpen = false
    
    sidebar: Subject<boolean> = new Subject<boolean>()
    //sidebar: Observable<boolean> = new Observable<boolean>
    //private subscriber!: Subscriber<boolean>

    constructor(){
        // this.sidebar = new Observable(x =>{
        //     this.subscriber = x
        // })
    }

    toggleSidebar(){
        //this.subscriber.next(this.sidebarOpen)
        this.sidebar.next(!this.sidebarOpen)
        this.sidebarOpen = !this.sidebarOpen
    }
}
