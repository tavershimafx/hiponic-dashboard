import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: "[badge]"
})
export class BadgeDirective implements OnInit{
    @Input() badge:  "info" | "success" | "danger" | "warning" | "text-color"= "info"

    constructor(private el: ElementRef){
        
    }

    ngOnInit(): void {
        this.el.nativeElement.style.display = "inline-block"
        this.el.nativeElement.style.padding = "7px 15px"
        this.el.nativeElement.style.borderRadius = "15px"
        this.el.nativeElement.style.color =`var(--${this.badge})`
        this.el.nativeElement.style.backgroundColor =  `var(--${this.getColor()})`
    }

    getColor(): string{
        switch (this.badge) {
            case "info":
                return "info-light"
            case "success":
                return "success-light"
            case "danger":
                return "danger-light"
            case "warning":
                return "warning-light"
            case "text-color":
                return "grey-scale"
            default:
                return "info-light";
        }
    }
}