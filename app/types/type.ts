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
  id: string | number;
  name: string;
  price: number;
  image?: string;
  category?: string;
  quantity?:number;
  rating?: number;
  description:string;
}

export interface CartItem extends Product {
  quantity: number;
  cart:[] 
}
