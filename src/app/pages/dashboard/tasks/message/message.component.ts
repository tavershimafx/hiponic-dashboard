import { Component } from '@angular/core';
import { MessageType, UserProfile } from '@models/models';
import { MessagingContext } from '@services/messaging-context';

@Component({
  selector: 'message',
  standalone: false,
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent{
  teamOptions = [
    { name: "Blue Team", value: "blueTeam" },
    { name: "Red Team", value: "redTeam" },
    { name: "Green Team", value: "greedTeam" },
    { name: "Black Team", value: "blackTeam" }
  ]

  readonly messageType : typeof MessageType = MessageType;
  chatUserId = "bbbb"
  currentUser: UserProfile = { id: "aaaa", username: "Tavershima Ako", profilePicture: "../../../../../assets/images/users/user-2.png" }
  constructor(public messageContext: MessagingContext){
   
  }

  getReadCount(userId: string){
    return this.messageContext.chats?.find(n => n.userId == userId)?.messages.filter(k => k.isRead == false).length
  }
}
