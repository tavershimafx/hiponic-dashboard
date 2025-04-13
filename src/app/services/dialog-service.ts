import { Injectable } from "@angular/core";
import { Observable, Subscriber} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DialogService{

    dialog: Observable<any>
    private subscriber?: Subscriber<any>

    constructor(){
        this.dialog = new Observable(sub =>{
            this.subscriber = sub
        })
    }

    showDialog(element: any){
        this.subscriber?.next(element)
    }
}
