import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexMarkers,
  ApexPlotOptions,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexStroke
} from "ng-apexcharts";

export interface IKeyValue{
  /**
   * The value or key which will be used or sent to the form control or initiator
   */
  key: any

  /**
   * The text to be displayed to the user
   */
  value: string

  /**
   * A flag to determine if the option should be disabled
   */
  disabled?: boolean
}

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

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  legend: ApexLegend;
};

export interface ISidebarItem{
  name: string
  url: string
  iconClass: string
  notificationCount?: number
  children?: ISidebarItem[]
}

export enum ProductStatus{
  Available,
  OutofStock,
  Suspended,
  Deleted
}

export interface IProduct extends IModelBase{
  id: string
  name: string
  brand: string
  stockQuantity: number
  sales: string
  price: string
  status: ProductStatus
}

export enum OrderStatus{
  PendingPayment,
  PaymentCompleted,
  Shipping,
  Completed,
  Cancelled,
  Closed
}

export interface IOrder extends IModelBase{
  id: string
  product: string
  customer: string
  total: string
  date: Date
  status: OrderStatus
}

/**
 * Uba models
 */

export interface IModelBase{
  selected?: boolean
}

export enum TransactionType{
  Finacle,
  Tellworld,
  NEFT_NIP,
  RTGS,
  CRP,
  Pensions,
  GTP,
  NAPs
}

export enum UserStatus{
  Active,
  InActive,
  Suspended,
  Deleted,
  Flagged
}

export enum RoleStatus{
  Active,
  Suspended,
  Deleted
}

export enum TransactionStatus{
  Pending,
  Approved,
  Declined,
  Flagged
}

export interface IUser extends IModelBase{
  userId: string
  username: string
  accountName: string
  email: string
  registeredAt: Date
  lastLogin: Date
  status: UserStatus
}

export interface IRole extends IModelBase{
  id: string
  name: string
  isSystem: boolean
  createdBy: string
  date: Date
  status: RoleStatus
}

export interface IRolePrivilege extends IModelBase{
  roleId: string
  roleName: string
  resources: IResource[]
}

export interface IResource extends IModelBase{
  id: string
  name: string
  permissions: IPermission
}

export interface IPermission extends IModelBase{
  read: boolean
  create: boolean
  update: boolean
  delete: boolean
  export: boolean
  import: boolean
}

export interface ITransaction extends IModelBase{
  id: string
  transactionType: TransactionType
  amount: string
  date: Date
  solId: string
  accountName: string
  accountNumber: string
  status: TransactionStatus
  description: string
}

export interface IAuditLog extends IModelBase{
  id: string
  date: Date
  ip: string
  action: string
  description: string
  username: string
  beforeState: object
  afterState: object
}

export interface IApproval extends IModelBase{
  id: string
  date: Date
  initiator: string
  approvalType: string
  currentStep: string
  currentUser: string
  status: TransactionStatus
}