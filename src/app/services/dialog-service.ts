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

    loadingObservable: Observable<any>
    private loadingSubscriber?: Subscriber<boolean>
    constructor(){
        this.dialog = new Observable(sub =>{
            this.subscriber = sub
        })

        this.loadingObservable = new Observable(sub =>{
            this.loadingSubscriber = sub
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
            // the assumption here is 
            // if we did not get a component then the method received eithe null
            // or an object to be sent back to the caller
            // null means the close button was clicked so just close
            // an object means the process completed so we should send the data back to
            // the caller and close the dialog
            // In addition, we also need to close the observable
            this.subscriber?.next(null)
            setTimeout(() => {
                this.onCloseSubscriber?.next(valueOrElement)
                this.onCloseSubscriber?.complete()
                this.onCloseSubscriber?.unsubscribe()
            }, 50);
        }

        this.subscriber?.next(valueOrElement)
        return this.onClose;
    }

    closeDialog(){
        if (this.onCloseSubscriber != undefined){
            this.onCloseSubscriber?.next(true)
            this.onCloseSubscriber?.complete()
        }

        this.subscriber?.next(null)
    }

    toggleAsyncMode(showLoading: boolean = true){
        this.loadingSubscriber?.next(showLoading)
    }
}
