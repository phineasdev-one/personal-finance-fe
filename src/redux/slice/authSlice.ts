import { Cookie } from "@/utils/cookie/constants";
import { getCookie } from "@/utils/cookie/cookie";
import { httpClient } from "@/utils/httpClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  token: string | null;
  authenticated: boolean;
  isLoading: boolean;
};

const initialState: AuthState = {
  token: null,
  authenticated: false,
  isLoading: true,
};

export const loadToken = createAsyncThunk("auth/loadToken", async (_, { rejectWithValue }) => {
  try {
    const token = getCookie(Cookie.ACCESS_TOKEN);

    if (token) {
      await httpClient.initAuthenticate(token);
      return {
        token,
        authenticated: true,
      };
    }

    return rejectWithValue("No token found");
  } catch (error) {
    //  TODO: Handle error

    return rejectWithValue("Unexpected error");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<{ token: string | null; authenticated: boolean }>) => {
      state.token = action.payload.token;
      state.authenticated = action.payload.authenticated;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    resetAuth: (state) => {
      state.token = null;
      state.authenticated = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.authenticated = action.payload.authenticated;
        state.isLoading = false;
      })
      .addCase(loadToken.rejected, (state) => {
        state.token = null;
        state.authenticated = false;
        state.isLoading = false;
      });
  },
});

export const { setAuthState, setIsLoading, resetAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
