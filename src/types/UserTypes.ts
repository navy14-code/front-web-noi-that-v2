export interface User {
  id?: number;
  password: string;
  fullName: string;
  email: string;
  phone: string;
  address: Addresses;
  usedCoupons: UsedCoupons;
}
export interface Addresses {
  id: number;
  name: string;
  detailAddress: string;
  locality: string;
  city: string;
  state: string;
  phone: string;
  user: User;
}
export interface Report {
  id: number;
  user: User;
  totalEarnings: number;
  totalSales: number;
  totalRefunds: number;
  netEarnings: number;
  totalOrders: number;
  canceledOrders: number;
  totalCustomers: number;
  totalTransactions: number;
}
export interface UsedCoupons {}
