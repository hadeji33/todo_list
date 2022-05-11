import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';

import { userSlice } from './users'

export const store = configureStore({
    reducer: combineReducers({
        users: userSlice.reducer,
    }),
    middleware: (getDefaultMidddleware) => getDefaultMidddleware().concat(),
    devTools: true,
});