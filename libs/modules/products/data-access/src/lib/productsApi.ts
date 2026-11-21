import { baseApi } from '@react-nx26-nov/http-client';
import { ProductCardItem, ProductsResponse } from './models/Products.types';
import { Product } from '@react-nx26-nov/shared-types';

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 1. Returns clean Product[] directly to the Container via transformResponse
    getProducts: builder.query<Product[], string | void>({
      query: (search = '') => {
        const trimmed = search?.trim();
        return trimmed
          // ? `/products/search?q=${encodeURIComponent(trimmed)}`   //in realtime if its configured then can use this
          ? `/products?q=${encodeURIComponent(trimmed)}`     //json-server response wont provide the above
          : '/products';
      },
      // transformResponse: (response: ProductsResponse) => response.products, 

    //     transformResponse: (response: ProductsResponse): ProductCardItem[] =>
    //          response.products.map((p) => ({
    //   id: p.id,
    //   title: p.title,
    //   category: p.category,
    //   price: p.price,
    //   discountPercentage: Math.round(p.discountPercentage),
    //   rating: Number(p.rating.toFixed(1)),
    //   availabilityStatus: p.availabilityStatus,
    //   thumbnail: p.thumbnail,
    //   brand: p.brand,
    // })),
      providesTags: ['Products'],
    }),

    // 2. Fetches a single product by ID
    getProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Products', id }],
    }),
  }),
  overrideExisting: false,
});

// Export auto-generated hooks for Containers to use
export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
