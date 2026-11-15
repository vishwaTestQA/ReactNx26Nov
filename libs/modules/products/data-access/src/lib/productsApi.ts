import { baseApi } from '@react-nx26-nov/http-client';
import { ProductsResponse } from './models/Products.types';
import { Product } from '@react-nx26-nov/shared-types';

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 1. Returns clean Product[] directly to the Container via transformResponse
    getProducts: builder.query<Product[], string | void>({
      query: (search = '') => {
        const trimmed = search?.trim();
        return trimmed
          ? `/products/search?q=${encodeURIComponent(trimmed)}`
          : '/products';
      },
      transformResponse: (response: ProductsResponse) => response.products,
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
