import { User } from './UserTypes';

export interface Product {
  id?: number;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  quantity: number;
  size: string;
  brand: string;
  images: string[];
  numRatings?: number;
  category?: Category;
  user?: User;
  createdAt?: Date;
}

interface Category {
  id?: number;
  name: string;
  categoryId: string;
  parentCategoryId?: Category;
  level: number;
}
