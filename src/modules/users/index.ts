import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

enum Roles {
    admin = 'ROLE_ADMIN',
}

interface User {
    username: string,
    role: Roles,
}

interface State {
    isLoading: boolean,
    isFailed: boolean,
    isLogin: boolean,
    error: string | null,
    currentUser: User | null,
}

const initialState: State = {
    isLoading: false,
    isFailed: false,
    isLogin: false,
    error: null,
    currentUser: null,
}
const authentificate: CaseReducer<State, PayloadAction<User>> = (state, { payload }) => {
    return {
        ...state,
        isLoading: false,
        isFailed: false,
        currentUser: payload,
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