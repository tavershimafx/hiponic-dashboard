import { Component } from '@angular/core';

@Component({
  selector: 'goals',
  standalone: false,
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent{
  users = [
    "../../../../assets/images/users/user-1.png",
    "../../../../assets/images/users/user-2.png",
  ]

  constructor(){
   
  }

}
