import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './index';


interface AuthState {
    phoneVerifyToken? : string
}

const initialState : AuthState = {
    phoneVerifyToken : undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        UpdatePhoneVerifyToken :(state , action : PayloadAction<string | undefined>) =>{
            state.phoneVerifyToken = action.payload
        }
    }
})
export const {UpdatePhoneVerifyToken} = authSlice.actions;

export const selectPhoneVerifyToken = (state : RootState) => state.auth.phoneVerifyToken

export default authSlice.reducer