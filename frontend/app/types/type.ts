export interface BlogPost {
  _id: string;
  blog_title: string;
  blog_author: string;
  blog_image: string;
  blog_description: string;
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
  quantity?: number;
  product_rating?: number;
  product_description: string;
}

export interface CartItem extends Product {
  quantity: number;
  cart?: [];
}
