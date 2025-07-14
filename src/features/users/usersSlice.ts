import { createSlice } from "@reduxjs/toolkit";
import { UserInputValues } from "../../types/types";

interface UsersState{
    users: UserInputValues[]
}

const initialState: UsersState = {
    users: [],
}

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        addUser(state, action){
            state.users.push(action.payload);
        },
        editUser(state, action){
            const index = state.users.findIndex( user => user.id === action.payload.id);
            if(index !== -1){
                state.users[index] = action.payload;
            }
        },
        deleteUser(state, action){
            state.users = state.users.filter( user => user.id !== action.payload );
        },
    },
});

export const {addUser, editUser, deleteUser} = usersSlice.actions;
export default usersSlice.reducer;