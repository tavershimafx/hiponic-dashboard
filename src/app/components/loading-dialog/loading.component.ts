import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { isInbound } from '@services/utilities';

@Component({
  selector: 'loading-dialog',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingDialogComponent implements OnInit, OnDestroy {
  @Input("size") size: string = "sm"
  @ViewChild("bodx", { static: true }) bodx! : ElementRef
  @Input() close?: boolean
  @Output() closeChange: EventEmitter<boolean> = new EventEmitter()

  constructor(){
    this.checkBound = this.checkBound.bind(this)
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.addEventListener("click", this.checkBound)
    }, 600);
  }

  ngOnDestroy(): void {
    window.removeEventListener("click", this.checkBound)
  }

  checkBound(e:MouseEvent){
    let el = this.bodx.nativeElement.getBoundingClientRect()
    let b = isInbound(el.top, el.left, el.bottom, el.right, e.clientX, e.clientY)
    if (!b){
      this.closeChange.emit(false)
    }
  }
}