import { createSlice, createAsyncThunk, Action } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import axios from 'axios';

import { setToken, unsetToken } from '../../config/axios';

export const register = createAsyncThunk('auth/register', async (userData: any, thunkApi) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/auth/register',
      data: userData,
    });
    return res.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

export const login = createAsyncThunk<any, any, any>('auth/login', async (userData: any, thunkApi) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/auth/login',
      data: userData,
    });
    return res.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_args, thunkApi) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/auth/logout',
    });
    return res.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

export const verify = createAsyncThunk('auth/verify', async (verificationToken: string, thunkApi) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `/auth/verify/${verificationToken}`,
    });
    return res.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

export const resendVerification = createAsyncThunk(
  'auth/resendVerification',
  async (email: string, thunkApi) => {
    try {
      const res = await axios({
        method: 'POST',
        url: '/auth/resend-verification',
        data: { email },
      });
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

interface IAuthState {
  user: any;
  loading: boolean;
  error: string | null;
}

const oneOf = (actionTypes: string[]) => (action: Action) => actionTypes.includes(action.type);

export const auth = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  } as IAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        oneOf([register.fulfilled.type, login.fulfilled.type]),
        (state, { payload }) => {
          state.user = payload;
          state.loading = false;
          state.error = null;
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
        state.error = null;
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
