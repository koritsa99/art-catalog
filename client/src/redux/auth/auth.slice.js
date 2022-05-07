import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import * as authApi from '../../services/authApi';

export const register = createAsyncThunk('auth/register', authApi.register);
export const login = createAsyncThunk('auth/login', authApi.login);
export const logout = createAsyncThunk('auth/logout', authApi.logout);
export const verify = createAsyncThunk('auth/verify', authApi.verify);
export const resendVerification = createAsyncThunk(
  'auth/resendVerification',
  authApi.resendVerification
);

const oneOf = (actionTypes) => (action) => {
  return actionTypes.includes(action.type);
};

export const auth = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        oneOf([register.fulfilled, login.fulfilled]),
        (state, { payload }) => {
          state.user = payload;
          state.loading = false;
        }
      )
      .addMatcher(oneOf([register.pending, login.pending]), (state) => {
        state.loading = true;
      })
      .addMatcher(
        oneOf([register.rejected, login.rejected]),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});

export default persistReducer(
  {
    key: 'auth',
    storage,
    whitelist: ['user'],
  },
  auth.reducer
);
