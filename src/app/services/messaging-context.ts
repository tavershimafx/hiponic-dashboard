import { Injectable } from "@angular/core";
import { ChatHead, MessageType, OnlineStatus } from "@models/models";

@Injectable({
    providedIn: "root"
})
export class MessagingContext{
    
    chats?: Array<ChatHead> =[{
        userId: "bbbb",
        onlineStatus: OnlineStatus.Online,
        username: "Jenni-finne",
        profilePicture: "../../../../../assets/images/users/user-4.png",
        messages: [
        { messageType: MessageType.Text, senderId: "aaaa", isRead: false, dateSent: new Date("04/23/2025 04:58"), content: "Hey Jenni-fine" },
        { messageType: MessageType.Text, senderId: "bbbb", isRead: true, dateSent: new Date("04/22/2025 09:15"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        { messageType: MessageType.Text, senderId: "aaaa", isRead: true, dateSent: new Date("04/22/2025 14:45"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        { messageType: MessageType.Text, senderId: "bbbb", isRead: true, dateSent: new Date("04/22/2025 07:25"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        { messageType: MessageType.DayBreaker, senderId: "bbbb", isRead: true, dateSent: new Date("05/19/2025 07:25"), content: "" },
        { messageType: MessageType.Image, senderId: "aaaa", isRead: true, dateSent: new Date("05/19/2025 15:50"), content:  [
            "../../../../../assets/images/pictures/241967113.jpg",
            "../../../../../assets/images/pictures/3881292600537277_n.jpg",
            "../../../../../assets/images/pictures/6951938_6943881292.jpg",
            "../../../../../assets/images/pictures/design-21-2.jpg",
        ] },
        { messageType: MessageType.Text, senderId: "bbbb", isRead: true, dateSent: new Date("05/22/2025 20:32"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        { messageType: MessageType.Text, senderId: "bbbb", isRead: true, dateSent: new Date("05/22/2025 09:15"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        { messageType: MessageType.Text, senderId: "aaaa", isRead: true, dateSent: new Date("05/22/2025 14:45"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        { messageType: MessageType.Text, senderId: "bbbb", isRead: true, dateSent: new Date("05/22/2025 07:25"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        ]
    },
    {
        userId: "cccc",
        onlineStatus: OnlineStatus.Online,
        username: "Jennifer Kato",
        profilePicture: "../../../../../assets/images/users/user-4.png",
        messages: [
        { messageType: MessageType.Image, senderId: "aaaa", isRead: false, dateSent: new Date("04/17/2025 04:57"), content:  [
            "../../../../../assets/images/pictures/241967113.jpg",
            "../../../../../assets/images/pictures/3881292600537277_n.jpg",
            "../../../../../assets/images/pictures/6951938_6943881292.jpg",
            "../../../../../assets/images/pictures/design-21-2.jpg",
        ] },
        { messageType: MessageType.Text, senderId: "aaaa", isRead: false, dateSent: new Date("04/19/2025 12:10"), content: "Hey Jenni-fine" },
        { messageType: MessageType.Text, senderId: "cccc", isRead: false, dateSent: new Date("04/19/2025 09:15"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        { messageType: MessageType.Text, senderId: "aaaa", isRead: true, dateSent: new Date("04/19/2025 14:45"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        { messageType: MessageType.Text, senderId: "cccc", isRead: true, dateSent: new Date("04/19/2025 07:25"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        { messageType: MessageType.DayBreaker, senderId: "cccc", isRead: true, dateSent: new Date("05/19/2025 07:25"), content: "" },
        { messageType: MessageType.Text, senderId: "cccc", isRead: true, dateSent: new Date("05/19/2025 20:32"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        { messageType: MessageType.Text, senderId: "cccc", isRead: true, dateSent: new Date("05/19/2025 09:15"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        { messageType: MessageType.Text, senderId: "aaaa", isRead: true, dateSent: new Date("05/19/2025 14:45"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        { messageType: MessageType.Text, senderId: "cccc", isRead: true, dateSent: new Date("05/19/2025 07:25"), content: "Hey Jenni-fine, just want to let you know you're the best thing that has happened to me this year." },
        ]
    }]
 
    constructor(){
       this.chats?.push()
    }

    sendMessage(){

    }

    getChatContext(userId: string): ChatHead{
        return this.chats?.find(n => n.userId == userId)!
    }
}
