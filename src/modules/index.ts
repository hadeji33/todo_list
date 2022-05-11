import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';

import { IUserState, userSlice } from './users'

export const store = configureStore({
    reducer: combineReducers({
        users: userSlice.reducer,
    }),
    middleware: (getDefaultMidddleware) => getDefaultMidddleware().concat(),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch