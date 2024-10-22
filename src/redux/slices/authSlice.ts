import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (registerData, { rejectWithValue }) => {
    try {
      const response = await 0;
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
    } catch (error: any) {
      return rejectWithValue(error.message || "error occured");
    }
  }
);

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading=true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading=false
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading=false
      })
      .addCase(signInUser.pending, (state) => {
        state.loading=true

      })
      .addCase(signInUser.fulfilled, (state) => {
        state.loading=false
      })
      .addCase(signInUser.rejected, (state) => {
        state.loading=false
      });
  },
});
export const {} = authSlice.actions;
export default authSlice.reducer;
