export interface IMailMessage{
  profilePicture: string
  sender: string
  subject: string
  message: string
  date: string
  isRead: boolean;
  attachments: number;
  id: number
}

// export interface IQuickMessage{
//   username: string
//   profilePicture: string
//   message: string;
//   time: string
// }

export enum MessageType{
  Text,
  Audio,
  Image,
  Document,
  DocumentPlusText,
  DayBreaker
}

export enum OnlineStatus{
  Online,
  Offline
}

export interface ChatMessage{
  messageType: MessageType
  content: any
  senderId: string
  dateSent: Date
  isRead: boolean
}

export interface ChatHead{
  userId: string
  username: string
  onlineStatus: OnlineStatus
  profilePicture?: string
  messages: Array<ChatMessage>;
}

export interface UserProfile{
  id: string
  username: string
  profilePicture: string
}