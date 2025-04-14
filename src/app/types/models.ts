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
