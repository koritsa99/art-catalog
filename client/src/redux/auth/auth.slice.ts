import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { setToken, unsetToken } from '../../config/axios';
import { User } from '../../types/entities';
import {
  registerPending,
  registerFullfield,
  registerRejected,
  loginPending,
  loginFullfield,
  loginRejected,
  logoutPending,
  logoutFullfield,
  logoutRejected,
} from './auth.actions';

interface IAuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  loading: false,
  error: null,
};

export const auth = createReducer(initialState, (builder) => {
  builder
    .addCase(logoutFullfield, (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
      unsetToken();
    })
    .addMatcher(
      isAnyOf(registerFullfield, loginFullfield),
      (state, { payload }) => {
        if (payload.authToken) {
          state.user = payload;
          state.loading = false;
          state.error = null;
          setToken(payload.authToken);
        }
      }
    )
    .addMatcher(
      isAnyOf(registerPending, loginPending, logoutPending),
      (state) => {
        state.loading = false;
      }
    )
    .addMatcher(
      isAnyOf(registerRejected, loginRejected, logoutRejected),
      (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      }
    );
});

export default persistReducer(
  {
    key: 'auth',
    storage,
    whitelist: ['user'],
  },
  auth
);
