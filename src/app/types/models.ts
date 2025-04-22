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

export interface IQuickMessage{
  username: string
  profilePicture: string
  message: string;
  time: string
}

export enum MessageType{
  Text,
  Audio,
  Image,
  Document,
  DocumentPlusText,
  DayBreaker
}

export interface ChatMessage{
  messageType: MessageType
  content: any
  senderId: string
  dateSent: Date
  isRead: boolean
}

export interface LoadedChat{
  username: string
  profilePicture: string
  messages: Array<ChatMessage>;
}

export interface UserProfile{
  username: string
  profilePicture: string
}