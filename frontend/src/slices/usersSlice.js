import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // List of users
  user: null, // The currently logged-in user
  loading: false, // Loading state for API calls
  error: null, // Error state
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUsers: (state, action) => {
      state.users = action.payload;
    },
    registerUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const {
  registerUsers,
  registerUser,
  setLoading,
  setError,
  addUser,
  updateUser,
  removeUser,
} = usersSlice.actions;

export default usersSlice.reducer;
