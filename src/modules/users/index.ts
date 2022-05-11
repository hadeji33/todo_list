import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

enum Roles {
    admin = 'ROLE_ADMIN',
}

export interface IUser {
    id?: number,
    username: string,
    role: Roles,
}

interface IAuthentificateState {
    user: IUser,
    token: string,
}

export interface IUserState {
    isLoading: boolean,
    isFailed: boolean,
    isLogin: boolean,
    error: string | null,
    currentUser: IUser | null,
    token: string | null,
}

const initialState: IUserState = {
    isLoading: false,
    isFailed: false,
    isLogin: false,
    error: null,
    currentUser: null,
    token: null,
}
const authentificate: CaseReducer<IUserState, PayloadAction<IAuthentificateState>> = (state, { payload }) => {
    return {
        ...state,
        isLoading: false,
        isFailed: false,
        isLogin: true,
        currentUser: payload.user,
        token: payload.token,
    }
}

export const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
            state.isFailed = false;
            
            return state;
        },
        failLoading: (state, { payload: { error } }) => {
            state.isLoading = false;
            state.isFailed = true;
            state.error = error;

            return state;
        },
        authentificate,
    }
})