import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { IKeyValue } from '@models/models';


@Component({
  selector: 'search-utility',
  templateUrl: './search-utility.component.html',
  styleUrls: ['./search-utility.component.css']
})
export class SearchUtilityComponent {

  @Input() filterValues?: IKeyValue[]
  @Input() pageOptions?: IKeyValue[] = [
    { key: "10", value: "10"},
    { key: "20", value: "20"},
    { key: "50", value: "50"},
    { key: "70", value: "70"},
    { key: "100", value: "100"},
  ]
  

  @Input() search: string = ""
  @Output() searchChange: EventEmitter<any> = new EventEmitter()

  @Output() sort: EventEmitter<any> = new EventEmitter()
  @Output() searchAll: EventEmitter<any> = new EventEmitter()

  query?: string
  from?: Date
  to?: Date
  size: number = 100

  constructor(){
   
  }

  sq(){
    this.searchAll.emit({
      query: this.query,
      startDate: this.from,
      endDate: this.to,
      pageSize: this.size
      })
  }

  fireSort(key: string){
    this.sort.emit(key)
  }

  fireChange(event: any){
    this.query = event
    this.fire()
  }

  fireTo(event: any){
    this.to = event
    this.fire()
  }

  fireFrom(event: any){
    this.from = event
    this.fire()
  }

  fire(){
    this.searchChange.emit({
      query: this.query,
      startDate: this.from,
      endDate: this.to,
      pageSize: this.size
      })
  }
}
