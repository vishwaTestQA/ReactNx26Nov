import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseApi } from '@react-nx26-nov/http-client';
import { authReducer } from '@react-nx26-nov/auth-data-access';

export const store = configureStore({
  reducer: {
    // Registers the centralized RTK Query cache reducer
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer
    // Add client-side slices here later (e.g., cart: cartReducer, auth: authReducer)
  },
  middleware: (getDefaultMiddleware) =>
    // Adding baseApi.middleware enables caching, invalidation, polling, and refetching
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Optional: enables automatic refetchOnFocus and refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
