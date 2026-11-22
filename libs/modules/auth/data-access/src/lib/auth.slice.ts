import { createSelector, createSlice, PayloadAction  } from "@reduxjs/toolkit"
import { AuthState } from "./auth.types";

const initialState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction <any>) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated =  true;
        },

        updateUserProfile: (state, action: PayloadAction<any>) => {
            if(state.user){
                state.user = {...state.user, ...action.payload}
            }
        },

        logout: () => initialState
    }
})

export const {setCredentials, updateUserProfile, logout} = authSlice.actions
export const authReducer = authSlice.reducer;   //exporting it for the store

const selectAuthDomain = (state: {auth: AuthState}) => state.auth
//selectors
export const selectCurrentUser = createSelector(
   (state: {auth:AuthState}) => state.auth,
   (auth) => auth.user 
)

export const selectIsAuthenticated = createSelector(
   [selectAuthDomain],
   (auth) => auth.isAuthenticated
)

export const selectUserFullName = createSelector(
    [selectCurrentUser],
    (user) => (user ? `${user.firstname} ${user.lastname}` : '')
)