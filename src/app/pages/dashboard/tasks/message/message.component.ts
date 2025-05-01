import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild("chat", { static: true }) chatChild! : ElementRef
  @ViewChild("profile", { static: true }) profile! : ElementRef
  @ViewChild("overview", { static: true }) overview! : ElementRef

  constructor(public messageContext: MessagingContext){
   
  }

  getReadCount(userId: string){
    return this.messageContext.chats?.find(n => n.userId == userId)?.messages.filter(k => k.isRead == false).length
  }

  openMesage(userId: string){
    this.overview.nativeElement.style.transform = "translateX(-100%)"
    this.chatChild.nativeElement.style.transform = "translateX(0)"

    // wait for the animation for finish playing
    setTimeout(() => {
      this.overview.nativeElement.style.display = "none"
      this.chatChild.nativeElement.style.position = "static"
    }, 1000);
    
  }

  showProfile(userId: string){
    this.chatChild.nativeElement.style.transform = "translateX(-100%)"

    this.profile.nativeElement.style.display = "flex"
    this.profile.nativeElement.style.position = "absolute"
    this.profile.nativeElement.style.transform = "translateX(0)"

    // wait for the animation for finish playing
    setTimeout(() => {
      this.chatChild.nativeElement.style.display = "none"
      this.profile.nativeElement.style.position = "static"
    }, 1000);
  }

  closeProfile(){
    this.chatChild.nativeElement.style.display = "flex"
    this.chatChild.nativeElement.style.position = "absolute"
    this.chatChild.nativeElement.style.transform = "translateX(-100%)"

    this.profile.nativeElement.style.transform = "translateX(100%)"
    this.chatChild.nativeElement.style.transform = "translateX(0)"

    // wait for the animation for finish playing
    setTimeout(() => {
      this.chatChild.nativeElement.style.position = "static !important"
      //this.profile.nativeElement.style.display = "none"
    }, 1000);
  }
}
