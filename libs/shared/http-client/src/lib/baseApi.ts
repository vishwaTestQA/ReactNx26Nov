import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
    credentials: 'include',  //include cookies in request
    prepareHeaders: (headers, {getState}) => {
      // const token = localStorage.getItem('access_token');
      const token = (getState() as { auth?: { accessToken: string | null } })?.auth?.accessToken
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Products', 'Cart', 'User', 'Auth'],

    // Global defaults for ALL endpoints across the workspace:
  keepUnusedDataFor: 60,        // Keep unused cache in memory for 60 seconds (default)
  refetchOnFocus: false,        // Don't refetch every time user switches browser tabs
  refetchOnReconnect: true,     // Automatically refetch stale data when internet reconnects

  endpoints: () => ({}), // Intentionally empty — feature teams inject their own endpoints!
});
