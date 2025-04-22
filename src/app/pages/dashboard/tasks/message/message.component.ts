import { Component } from '@angular/core';
import { ChatMessage, IQuickMessage, LoadedChat, MessageType, UserProfile } from '@models/models';

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
  readonly messageTypes : typeof MessageType = MessageType;
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
    { username: "Sussan Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-1.png", message: "Hi, how are you today?"},
    { username: "Queen Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-2.png", message: "Hi, how are you today?"},
    { username: "Sussan Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-1.png", message: "Hi, how are you today?"},
    { username: "Jennifer Kato", time: "08:24", profilePicture: "../../../../assets/images/users/user-3.png", message: "Hi, how are you today?"},
    { username: "Queen Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-2.png", message: "Hi, how are you today?"},
    { username: "Sussan Ako", time: "08:24", profilePicture: "../../../../assets/images/users/user-1.png", message: "Hi, how are you today?"}
  ]

  currentChat?: LoadedChat ={
    username: "Jennifer Kato",
    profilePicture: "../../../../../assets/images/users/user-4.png",
    messages: [
      { messageType: MessageType.Text, senderId: "aaa", isRead: true, dateSent: new Date("04/19/2025 12:10"), content: "Hey Jenni-fine" },
      { messageType: MessageType.Text, senderId: "bbb", isRead: true, dateSent: new Date("04/19/2025 09:15"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
      { messageType: MessageType.Text, senderId: "aaa", isRead: true, dateSent: new Date("04/19/2025 14:45"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
      { messageType: MessageType.Text, senderId: "bbb", isRead: true, dateSent: new Date("04/19/2025 07:25"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
      { messageType: MessageType.DayBreaker, senderId: "bbb", isRead: true, dateSent: new Date("05/19/2025 07:25"), content: "" },
      { messageType: MessageType.Image, senderId: "aaa", isRead: true, dateSent: new Date("05/19/2025 15:50"), content:  [
        "../../../../../assets/images/pictures/241967113.jpg",
        "../../../../../assets/images/pictures/3881292600537277_n.jpg",
        "../../../../../assets/images/pictures/6951938_6943881292.jpg",
        "../../../../../assets/images/pictures/design-21-2.jpg",
      ] },
      { messageType: MessageType.Text, senderId: "bbb", isRead: true, dateSent: new Date("05/19/2025 20:32"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
      { messageType: MessageType.Text, senderId: "bbb", isRead: true, dateSent: new Date("05/19/2025 09:15"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
      { messageType: MessageType.Text, senderId: "aaa", isRead: true, dateSent: new Date("05/19/2025 14:45"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
      { messageType: MessageType.Text, senderId: "bbb", isRead: true, dateSent: new Date("05/19/2025 07:25"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
    ]
  }
 
  currentUser: UserProfile = { username: "Tavershima Ako", profilePicture: "../../../../../assets/images/users/user-2.png" }
  constructor(){
   
  }

}
