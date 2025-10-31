export interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
}
export interface Review {
  id: number;
  reviewText: string;
  profileImage: string;
  name: string;
  comment: string;
  rating: number;
}
export interface Product {
  _id: string | number;
  product_name: string;
  product_price: number;
  product_image?: string | null;
  product_category?: string;
  quantity?:number;
  product_rating?: number;
  product_description:string;
}

export interface CartItem extends Product {
  quantity: number;
  cart:[] 
}
