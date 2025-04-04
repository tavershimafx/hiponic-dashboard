import { Component, Input } from '@angular/core';

@Component({
  selector: 'stacked-images',
  templateUrl: './stacked-images.component.html',
  styleUrls: ['./stacked-images.component.css']
})
export class StackedImagesComponent {

  @Input() images: Array<any> = []
  @Input() max: number = 2
  @Input() size: "md" | "sm" = "md"

  constructor(){
   
  }
}
