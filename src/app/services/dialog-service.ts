import { Component, Injectable } from "@angular/core";
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

    /**
     * Opens a component as a modal dialog.
     * Calling the method with null closes the opened dialog
     * Calling the method with an object other than a typeof of @class Component sends the value
     * to the caller
     * @param valueOrElement The component to lauch
     * @returns 
     */
    showDialog(valueOrElement: any): Observable<boolean> | undefined{
        if (typeof(valueOrElement) == typeof(Component)){
            this.onClose = new Observable(sub =>{
                this.onCloseSubscriber = sub
            })
        }
        else{
            this.onCloseSubscriber?.next(valueOrElement)
        }

        this.subscriber?.next(valueOrElement)
        return this.onClose;
    }

    closeDialog(){
        if (this.onCloseSubscriber != undefined){
            this.onCloseSubscriber?.next(true)
        }
        this.subscriber?.next(null)
    }
}
