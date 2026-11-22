import { baseApi } from "@react-nx26-nov/http-client";
import { setCredentials } from "./auth.slice";
import { syncCredentialOnSuccess } from "./auth.utils";

const authApi = baseApi.injectEndpoints({
   endpoints:  (builder) => ({
    registerUser: builder.mutation({
        query: (body) => ({
            url: '/users',
            method: 'post',
            body: {id:100, ...body},
        }),

      onQueryStarted: syncCredentialOnSuccess
    }),

    loginUser: builder.mutation({
        query: (body) => ({
            url: 'auth/login',
            method: 'post',
            body: {...body},
        }),
     invalidatesTags: ['User'],
         // Automatically syncs Redux auth state when registration succeeds
      onQueryStarted: syncCredentialOnSuccess

  }),
  }),
  overrideExisting: false,
})

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;