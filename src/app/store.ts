import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/users/usersSlice';
import authReducer from '../features/auth/authSlice';
import projectReducer from '../features/projects/projectSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer,
        project: projectReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;