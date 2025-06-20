import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class PageTitleService{
    title : string = ""

    description?: string = ""

    constructor(){
       
    }

    setTitle(value: { title: string, description?: string }){
        this.title = value.title
        this.description = value.description
    }
}