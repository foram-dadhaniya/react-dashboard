import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserInputValues } from "../../types/types";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase";
import { get, ref, set, update, remove } from "firebase/database";

interface UsersState {
  users: UserInputValues[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

//fetch user
export const fetchUsersFromFirebase = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const usersRef = ref(db, "users");
      const snapshot = await get(usersRef);

      if (!snapshot.exists()) return [];

      const data = snapshot.val();
      const usersArray = Object.values(data) as UserInputValues[];

      return usersArray;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        "Failed to fetch users: " + error.message
      );
    }
  }
);

//add user
export const addUserToFirebase = createAsyncThunk(
  "users/addUser",
  async (user: Omit<UserInputValues, "id">, thunkAPI) => {
    try {
      const id = uuidv4();
      const userData: UserInputValues = { ...user, id };
      const userRef = ref(db, `users/${id}`);
      await set(userRef, userData);
      return userData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//edit user
export const editUserToFirebase = createAsyncThunk(
  "users/editUser",
  async (user: UserInputValues, thunkAPI) => {
    try {
      const userData = { ...user };
      const userRef = ref(db, `users/${user.id}`);
      await update(userRef, userData);
      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//delete user
export const deleteUserToFirebase = createAsyncThunk(
    "users/deleteUser",
    async (id: string, thunkAPI) => {
        try {
          const userRef = ref(db, `users/${id}`);
          await remove(userRef);
          return id;
        } catch (error: any) {
          return thunkAPI.rejectWithValue(error.message);
        }
      }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // addUser(state, action){
    //     state.users.push(action.payload);
    // },
    // editUser(state, action) {
    //   const index = state.users.findIndex(
    //     (user) => user.id === action.payload.id
    //   );
    //   if (index !== -1) {
    //     state.users[index] = action.payload;
    //   }
    // },
    // deleteUser(state, action) {
    //   state.users = state.users.filter((user) => user.id !== action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      // Add User
      .addCase(addUserToFirebase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUserToFirebase.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.loading = false;
      })
      .addCase(addUserToFirebase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch users
      .addCase(fetchUsersFromFirebase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersFromFirebase.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsersFromFirebase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Edit Users
      .addCase(editUserToFirebase.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      //Delete user
      .addCase(deleteUserToFirebase.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
  },
});

export default usersSlice.reducer;
