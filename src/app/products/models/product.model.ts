export interface ProductsResponseModel {
  products: ProductModel[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductModel {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
