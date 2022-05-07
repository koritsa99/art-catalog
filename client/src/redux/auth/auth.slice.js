import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import * as authApi from '../../services/authApi';
import { setToken, unsetToken } from '../../config/axios';

export const register = createAsyncThunk('auth/register', authApi.register);
export const login = createAsyncThunk('auth/login', authApi.login);
export const logout = createAsyncThunk('auth/logout', authApi.logout);
export const verify = createAsyncThunk('auth/verify', authApi.verify);
export const resendVerification = createAsyncThunk(
  'auth/resendVerification',
  authApi.resendVerification
);

const oneOf = (actionTypes) => (action) => actionTypes.includes(action.type);

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
        oneOf([register.fulfilled.type, login.fulfilled.type]),
        (state, { payload }) => {
          state.user = payload;
          state.loading = false;
          state.error = false;
          setToken(payload.authToken);
        }
      )
      .addMatcher(
        oneOf([register.pending.type, login.pending.type]),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        oneOf([register.rejected.type, login.rejected.type]),
        (state, { payload }) => {
          state.error = payload;
          state.loading = false;
        }
      )
      .addMatcher(oneOf([logout.fulfilled.type]), (state) => {
        state.user = null;
        state.loading = false;
        state.error = false;
        unsetToken();
      });
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
