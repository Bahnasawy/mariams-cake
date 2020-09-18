declare module "*.png"
declare module "*"

type Order = {
  cupcakes?: number
  cakepops?: number
  custom?: string
}

type Mail = {
  fullName: string
  phone: string
  email: string
  occasion: string
  order: Order
  date: string
  pickup: boolean
}

type Action = {
  type:
    | "fullName"
    | "phone"
    | "email"
    | "occasion"
    | "order"
    | "date"
    | "pickup"
  value: string | Order | string | boolean
}
