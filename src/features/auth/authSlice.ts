import { createSlice } from "@reduxjs/toolkit";

interface authState {
    isAuthenticated: boolean;
}

const initialState: authState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn(state){
            state.isAuthenticated = true;
        },
        signOut(state){
            state.isAuthenticated = false;
        }
    }
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;