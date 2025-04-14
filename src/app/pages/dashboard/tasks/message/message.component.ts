import { Component } from '@angular/core';
import { IQuickMessage } from '@models/models';

@Component({
  selector: 'message',
  standalone: false,
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent{
 quickMessages: Array<IQuickMessage> = [
    { username: "Tavershima Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-4.png", message: "Hi, how are you today?"},
    { username: "Jennifer Kato", time: "08:24", profilePicture: "../../../../assets/images/users/user-3.png", message: "Hi, how are you today?"},
    { username: "Queen Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-2.png", message: "Hi, how are you today?"},
    { username: "Sussan Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-1.png", message: "Hi, how are you today?"},
    { username: "Jennifer Kato", time: "08:24", profilePicture: "../../../../assets/images/users/user-3.png", message: "Hi, how are you today?"},
    { username: "Queen Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-2.png", message: "Hi, how are you today?"},
    { username: "Sussan Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-1.png", message: "Hi, how are you today?"},
    { username: "Jennifer Kato", time: "08:24", profilePicture: "../../../../assets/images/users/user-3.png", message: "Hi, how are you today?"},
    { username: "Queen Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-2.png", message: "Hi, how are you today?"},
    { username: "Sussan Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-1.png", message: "Hi, how are you today?"}
  ]

  constructor(){
   
  }

}
