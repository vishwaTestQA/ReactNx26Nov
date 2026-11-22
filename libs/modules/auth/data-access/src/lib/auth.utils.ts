import { setCredentials } from "./auth.slice";

export const syncCredentialOnSuccess = async(
      _: unknown, 
     { dispatch, queryFulfilled }: {dispatch:any, queryFulfilled: any}) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch {
          // Error is automatically exposed via mutation hook in UI
        }
      }