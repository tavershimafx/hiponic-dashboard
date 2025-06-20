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
        this.el.nativeElement.style.backgroundColor =  `var(--${getColor(this.badge)})`
    }
}

export type classes = "info" | "success" | "danger" | "warning" | "text-color"

@Directive({
    selector: "[squareBadge]"
})
export class SquareBadgeDirective implements OnInit{
    @Input() squareBadge: classes = "info";//"info" | "success" | "danger" | "warning" | "text-color"= "info"

    constructor(private el: ElementRef){
        
    }

    ngOnInit(): void {
        this.el.nativeElement.style.display = "inline-block"
        this.el.nativeElement.style.padding = "5px 15px"
        this.el.nativeElement.style.borderRadius = "5px"
        this.el.nativeElement.style.color =`var(--${this.squareBadge})`
        this.el.nativeElement.style.backgroundColor =  `var(--${getColor(this.squareBadge)})`
    }
}

function getColor(badge: string): string{
    switch (badge) {
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