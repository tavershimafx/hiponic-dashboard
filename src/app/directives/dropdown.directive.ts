import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: "[dropdown]"
})
export class DropdownDirective implements OnInit{
    dropdown: boolean = false

    constructor(private el: ElementRef){
        this.blur = this.blur.bind(this)
    }

    menu!: any

    ngOnInit(): void {
        this.el.nativeElement.style.cursor = "pointer"
        this.el.nativeElement.style.zIndex = "20"
        for(let eel in this.el.nativeElement.children){
            if (this.el.nativeElement.children[eel].classList.contains("dropdown-menu")){
                this.menu =  this.el.nativeElement.children[eel]
                return;
            }
        }
    }

    @HostListener("click") onClick(){
        if (!this.dropdown){
            this.menu.style.visibility = "visible"
            this.menu.focus()
            this.menu.addEventListener("blur", this.blur)
        }else{
            this.menu.style.visibility = "hidden"
            this.menu.removeEventListener("click", this.blur)
        }
        this.dropdown = !this.dropdown
    }

    blur(){
        if (this.dropdown){
            this.menu.style.visibility = "hidden"
            this.menu.removeEventListener("click", this.blur)
            this.dropdown = !this.dropdown
        }
    }
}