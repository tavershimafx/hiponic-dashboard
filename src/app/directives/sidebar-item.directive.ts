import { Directive, ElementRef, HostListener,} from "@angular/core";

@Directive({
    selector: "[sidebarItem]"
})
export class SideBarItemDirective{

    constructor(private el: ElementRef){ 
       
     }

    @HostListener("click") onClick(){
        let parent = this.el.nativeElement.parentElement.parentElement // ul
        for(let li of parent.children){
            if (li.classList.contains("active") && !this.el.nativeElement.isEqualNode(li)){
                li.classList.remove("active")
            }
        }

        setTimeout(() => {
            this.el.nativeElement.parentElement.classList.add("active")
        }, 50);
    }
}
