import { IProduct } from "./product.types";

export interface Transaction {
  id: string;
  transactionStatus: string | null;
  bank_status: string;
  date_time: string;
  method: string;
  sp_code: string;
  sp_message: string;
}

export interface Product {
  product: IProduct;
  quantity: number;
  salePrice: number;
  _id: string;
}

export interface ShippingAddress {
  fullName: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
}

export interface Order {
  transaction: Transaction;
  _id: string;
  user: string;
  products: Product[];
  totalPrice: number;
  shippingCharge: number;
  shippingAddress: ShippingAddress;
  status: string;
  createdAt: string;
  updatedAt: string;
}
