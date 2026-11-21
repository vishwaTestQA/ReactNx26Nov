import { Product } from "@react-nx26-nov/shared-types";

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductCardItem {
  id: number;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  availabilityStatus: string;
  thumbnail: string;
  brand?: string;
}

// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   tags: string[];
//   brand?: string;
//   sku: string;
//   weight: number;
//   dimensions: {
//     width: number;
//     height: number;
//     depth: number;
//   };
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   reviews: {
//     rating: number;
//     comment: string;
//     date: string;
//     reviewerName: string;
//     reviewerEmail: string;
//   }[];
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   meta: {
//     createdAt: string;
//     updatedAt: string;
//     barcode: string;
//     qrCode: string;
//   };
//   images: string[];
//   thumbnail: string;
// }
