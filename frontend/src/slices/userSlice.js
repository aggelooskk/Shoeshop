import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [], // This can hold multiple users if needed in the future
  user: null, // This holds the currently logged-in user
  loading: false,
  error: null,
};

// Async thunk for logging in a user
export const loginUser = createAsyncThunk(
  "user/loginUser", // Changed from "users/loginUser" to "user/loginUser"
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users/login", credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

// Async thunk for registering a new user
export const registerUser = createAsyncThunk(
  "user/registerUser", // Changed from "users/registerUser" to "user/registerUser"
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/users/register", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser", // Changed from "users/logoutUser" to "user/logoutUser"
  async () => {
    // Handle logout logic if any, e.g., clearing tokens or making an API call
    return {};
  }
);

const usersSlice = createSlice({
  name: "user", // Changed from "users" to "user" because it's mainly managing individual user
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload); // This manages the list of users
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
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Set the logged-in user
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Set the registered user
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null; // Clear the logged-in user on logout
      });
  },
});

export const { setLoading, setError, addUser, updateUser, removeUser } =
  usersSlice.actions;

export default usersSlice.reducer;
