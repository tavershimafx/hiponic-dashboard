import { Injectable } from "@angular/core";
import { Observable, Subscriber} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DialogService{

    dialog: Observable<any>
    private subscriber?: Subscriber<any>
    private onClose?: Observable<any>
    private onCloseSubscriber?: Subscriber<any>

    constructor(){
        this.dialog = new Observable(sub =>{
            this.subscriber = sub
        })
    }

    showDialog(element: any): Observable<boolean> | undefined{
        if (element != null){
            this.onClose = new Observable(sub =>{
                this.onCloseSubscriber = sub
            })
        }else{
            if (this.onCloseSubscriber != undefined){
                this.onCloseSubscriber?.next(true)
            }
        }

        this.subscriber?.next(element)
        return this.onClose;
    }
}
