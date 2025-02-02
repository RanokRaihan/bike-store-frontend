export interface IProduct {
  _id: string;
  brand: string;
  model: string;
  price: number;
  discount: number;
  category: string;
  description: string;
  quantity: number;
  image: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
  salePrice: number;
}
