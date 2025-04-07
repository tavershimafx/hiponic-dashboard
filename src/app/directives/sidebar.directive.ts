import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";
import { SidebarService } from "@services/sidebar";
import { isInbound } from '@services/utilities';


@Directive({
    selector: "[sidebar]"
})
export class SidebarDirective implements OnInit{
    aside!: any
    
    constructor(private el: ElementRef, private sidebar: SidebarService){
        sidebar.sidebar.subscribe({
            next: (x) =>{
                if (!x && sidebar.sidebarOpen){
                    this.collapseAll()
                }

                if (!x){
                    this.aside.classList.add("collapsed-nav")
                }
            }
        })
    }

    ngOnInit(): void {
        this.aside = this.el.nativeElement.parentElement.parentElement.parentElement.parentElement
    }

    @HostListener("click") onClick(e:MouseEvent){  
        this.expandSidebar(e) 
        let parent = this.el.nativeElement.parentElement.parentElement // ul
        for(let li of parent.children){
            if(this.el.nativeElement.parentElement == li){
                if(li.children.length > 1){
                    if(li.children.item(1).style.maxHeight == null || li.children.item(1).style.maxHeight == ""){
                        li.children.item(1).style.maxHeight = li.children.item(1).scrollHeight + "px";
                    }else{
                        li.children.item(1).style.maxHeight = null
                    }
                }
            }else{
                li.classList.remove("active")
                if(li.children.length > 1){
                    for(let sli of li.children.item(1).children){
                        sli.classList.remove("active")
                    }
                    li.children.item(1).style.maxHeight = null
                }
            }
        }
        this.el.nativeElement.parentElement.classList.add("active")
    }

    collapseAll(){
        let parent = this.el.nativeElement.parentElement.parentElement // ul
        for(let li of parent.children){
            if(li.classList.contains("active")){
                li.classList.remove("active")
                if(li.children.length > 1){
                    for(let sli of li.children.item(1).children){
                        sli.classList.remove("active")
                    }
                    li.children.item(1).style.maxHeight = null
                }
            }
        }
    }

    expandSidebar(e:MouseEvent){
      if (!this.sidebar.sidebarOpen){
        this.sidebar.toggleSidebar()
        this.aside.classList.remove("collapsed-nav")
      }else if (this.sidebar.sidebarOpen && !this.isBound(e)){
        this.sidebar.toggleSidebar()
      }
    }

    private isBound(e:MouseEvent) :boolean{
        if(e){
            let el = this.aside.getBoundingClientRect()
            return isInbound(el.top, el.left, el.bottom, el.right, e.clientX, e.clientY)
        }
        
        return true
    }
}