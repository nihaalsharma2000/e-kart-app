export interface Product {
  id: string | number;
  name: string;
  price: number;
  image?: string;
  category?: string;
  rating?: number;
}

export interface CartItem extends Product {
  quantity: number;
}
