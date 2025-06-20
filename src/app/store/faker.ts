import { faker } from '@faker-js/faker';
import { IApproval, IAuditLog, IRole, ITransaction, IUser, RoleStatus, TransactionStatus, TransactionType, UserStatus } from '@models/models';


function randomUser(): IUser {
  return {
    userId: faker.string.uuid(),
    accountName: faker.helpers.fake(`${faker.person.firstName()} ${faker.person.lastName()}`),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.helpers.fake(`${faker.internet.username()}@ubagroup.com`),
    registeredAt: faker.date.past(),
    lastLogin: faker.date.past(),
    status: faker.helpers.enumValue(UserStatus)
  };
}

function randomTransaction(): ITransaction {
  return {
    id: faker.string.uuid(),
    description: faker.finance.transactionDescription(),
    transactionType: faker.helpers.enumValue(TransactionType),
    amount: faker.finance.amount({ symbol: "₦" }),
    date: faker.date.past(),
    solId: soleId,
    accountName: faker.helpers.fake(`${faker.person.firstName()} ${faker.person.lastName()}`),
    accountNumber: faker.finance.accountNumber(),
    status: faker.helpers.enumValue(TransactionStatus)
  };
}

const auditActions = [
  "Login Fail", "Login Success",
  "Search Users", "View User", "Update User", "Delete User",
  "Create Role", "Update Role", "Delete Role",
  "Approve Role", "Assign Privilege",
  "E-Callover Approval", "Approve Step1", "Approve Credit"
]

const soleId = faker.helpers.fake(`BTN/90/${faker.string.alpha({ casing: "upper" })}${faker.string.alpha({ casing: "upper" })}${faker.number.bigInt({ min: 100000, max: 999999})}`)
const approvalSteps = ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5"]
const approvalTypes = ["E-Callover", "E-Callover", "Transaction", "Data Import", "Role Assign",]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  
function randomAudit(): IAuditLog {
  return {
    id: faker.string.uuid(),
    date: faker.date.past(),
    ip: faker.internet.ipv4(),
    action: faker.helpers.arrayElement(auditActions),
    description: faker.finance.transactionDescription(),
    username: soleId,
    beforeState: randomUser(),
    afterState: randomUser()
  };
}

function randomApproval(): IApproval {
  return {
    id: faker.string.uuid(),
    date: faker.date.past(),
    initiator: soleId,
    approvalType: faker.helpers.arrayElement(approvalTypes),
    currentStep: faker.helpers.arrayElement(approvalSteps),
    currentUser: faker.helpers.fake(`${faker.person.firstName()} ${faker.person.lastName()}`),
    status: faker.helpers.enumValue(TransactionStatus)
  };
}

export function lineData() {
  return{
    x: faker.helpers.multiple(() => faker.number.int({min: 30, max: 250}), { count: 100 }), //[40, 85, 35, 68, 30, 75, 50, 100, 30, 75, 50]
    y: faker.helpers.multiple(() => faker.helpers.fake(`${faker.helpers.arrayElement(months)} ${faker.number.int({min: 1, max: 31})}`), { count: 100 })
  }
  }

// function barData(){
//   xData = faker.helpers.multiple(() => faker.number.int({min: 30, max: 250}), { count: 100 }) //[40, 85, 35, 68, 30, 75, 50, 100, 30, 75, 50]
//   yData = faker.helpers.multiple(() => faker.helpers.fake(`${faker.helpers.arrayElement(this.months)} ${faker.number.int({min: 1, max: 31})}`), { count: 100 })

// }
export const users = faker.helpers.multiple(randomUser, {
  count: 50,
});

export const transactions: ITransaction[] = faker.helpers.multiple(randomTransaction, {
  count: 100,
});

export const randomAudits: IAuditLog[] = faker.helpers.multiple(randomAudit, {
  count: 100,
});

export const approvals: IApproval[] = faker.helpers.multiple(randomApproval, {
  count: 100,
});

export const roles: IRole[] = [
  { id: faker.string.uuid(), name: "Admin", date: faker.date.past(), isSystem: true, status: faker.helpers.enumValue(RoleStatus), createdBy: faker.helpers.fake(`${faker.person.firstName()} ${faker.person.lastName()}`)},
  { id: faker.string.uuid(), name: "Super Admin", date: faker.date.past(), isSystem: true, status: faker.helpers.enumValue(RoleStatus), createdBy: faker.helpers.fake(`${faker.person.firstName()} ${faker.person.lastName()}`)},
  { id: faker.string.uuid(), name: "Credit Officer", date: faker.date.past(), isSystem: false, status: faker.helpers.enumValue(RoleStatus), createdBy: faker.helpers.fake(`${faker.person.firstName()} ${faker.person.lastName()}`)},
  { id: faker.string.uuid(), name: "ECQ Admin", date: faker.date.past(), isSystem: false,status: faker.helpers.enumValue(RoleStatus), createdBy: faker.helpers.fake(`${faker.person.firstName()} ${faker.person.lastName()}`)},
  { id: faker.string.uuid(), name: "Risk Officer", date: faker.date.past(), isSystem: false, status: faker.helpers.enumValue(RoleStatus), createdBy: faker.helpers.fake(`${faker.person.firstName()} ${faker.person.lastName()}`)},
  { id: faker.string.uuid(), name: "Bank Admin", date: faker.date.past(), isSystem: false, status: faker.helpers.enumValue(RoleStatus), createdBy: faker.helpers.fake(`${faker.person.firstName()} ${faker.person.lastName()}`)},
  { id: faker.string.uuid(), name: "Business Operations", date: faker.date.past(), isSystem: false, status: faker.helpers.enumValue(RoleStatus), createdBy: faker.helpers.fake(`${faker.person.firstName()} ${faker.person.lastName()}`)},
  { id: faker.string.uuid(), name: "Security Audit", date: faker.date.past(), isSystem: false, status: faker.helpers.enumValue(RoleStatus), createdBy: faker.helpers.fake(`${faker.person.firstName()} ${faker.person.lastName()}`)},
]
