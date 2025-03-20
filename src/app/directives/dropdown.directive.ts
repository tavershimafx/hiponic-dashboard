import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: "[dropdown]"
})
export class DropdownDirective{
    constructor(private el: ElementRef){
      
    }

    @HostListener("click") onClick(){   
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
}