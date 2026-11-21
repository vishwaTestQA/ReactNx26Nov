import { baseApi } from "./baseApi";

// libs/shared/http-client/src/lib/sharedApi.ts
export const sharedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<UserProfile, string>({
      query: (id) => `/users/${id}`,
      providesTags: ['User'],
      keepUnusedDataFor: 10,
      
    }),
  }),
});

export const { useGetCurrentUserQuery } = sharedApi;
