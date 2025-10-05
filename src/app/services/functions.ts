import { Observable } from "rxjs"
//import { ApplicationEndpoints } from "../constants"
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable({providedIn: 'root'})
export  class UtilityFunctions{
  constructor(private httpClient: HttpClient){}

  /**
   * 
   * @param data A base64 image string to be uploaded
   * @param fileName The intended filename. This filename could be modified by the server
   * based on filename availability
   * @returns the url path if the file uploads successfully or false as a string
   */
//   public uploadImage(data: string, fileName: string): Observable<string>{
//     return new Observable(subscriber =>{
//      let fileUp = {
//        FileName: fileName,
//        Base64String: data.split(";base64,")[1]
//      }
     
//      this.httpClient.post(ApplicationEndpoints.FileUpload, fileUp).subscribe({
//        next: (k: any) =>{
//          if (k.status){
//            subscriber.next(k.result)
//            subscriber.complete()
//          }
//          subscriber.next("false")
//          subscriber.complete()
//        },
//        error: (e: any)=>{
//          subscriber.next("false")
//          subscriber.complete()
//        }
//      })
//     })
//   }
  
  public static formatMoney(x: string | Number): string{
    return Number(x).toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  public static getMoneyValueWithoutComma(val: string): string{
    return val.replaceAll(',', '')
  }
  
  public static isEmail(x:string):boolean  {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(x);
  }
  
  public static isUrl(x:string):boolean  {
    return /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(x);
  }
}
