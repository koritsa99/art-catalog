import { Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { LoginRequestDTO, RegisterRequestDTO } from '../../types/requests';
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

export const register =
  (userData: RegisterRequestDTO) => async (dispatch: Dispatch) => {
    try {
      dispatch(registerPending());

      const res = await axios.post('/auth/register', userData);
      dispatch(registerFullfield(res.data));
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        dispatch(registerRejected(error.response.data));
      } else {
        dispatch(registerRejected('Error'));
      }
    }
  };

export const login =
  (userData: LoginRequestDTO) => async (dispatch: Dispatch) => {
    try {
      dispatch(loginPending());

      const res = await axios({
        method: 'POST',
        url: '/auth/login',
        data: userData,
      });
      dispatch(loginFullfield(res.data));
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        dispatch(loginRejected(error.response.data));
      } else {
        dispatch(loginRejected('Error'));
      }
    }
  };

export const logout = () => async (dispatch: Dispatch) => {
  try {
    dispatch(logoutPending());

    const res = await axios({
      method: 'POST',
      url: '/auth/logout',
    });
    dispatch(logoutFullfield(res.data));
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      dispatch(logoutRejected(error.response.data));
    } else {
      dispatch(logoutRejected('Error'));
    }
  }
};

// export const verify = createAsyncThunk(
//   'auth/verify',
//   async (verificationToken: string, thunkApi) => {
//     try {
//       const res = await axios({
//         method: 'GET',
//         url: `/auth/verify/${verificationToken}`,
//       });
//       return res.data;
//     } catch (error) {
//       if (error instanceof AxiosError && error.response) {
//         return thunkApi.rejectWithValue(error.response.data);
//       } else {
//         return 'Error';
//       }
//     }
//   }
// );

// export const resendVerification = createAsyncThunk(
//   'auth/resendVerification',
//   async (email: string, thunkApi) => {
//     try {
//       const res = await axios({
//         method: 'POST',
//         url: '/auth/resend-verification',
//         data: { email },
//       });
//       return res.data;
//     } catch (error) {
//       if (error instanceof AxiosError && error.response) {
//         return thunkApi.rejectWithValue(error.response.data);
//       } else {
//         return 'Error';
//       }
//     }
//   }
// );
