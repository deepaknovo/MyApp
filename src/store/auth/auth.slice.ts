import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './auth.types';

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
