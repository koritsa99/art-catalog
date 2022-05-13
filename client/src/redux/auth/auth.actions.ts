import { createAction } from '@reduxjs/toolkit';
import {
  LoginResponseDTO,
  LogoutResponseDTO,
  RegisterResponseDTO,
} from '../../types/responses';

type ErrorResponse = string | any;

export const registerPending = createAction('auth/register/pending');
export const registerFullfield = createAction<RegisterResponseDTO>(
  'auth/register/fullfield'
);
export const registerRejected = createAction<ErrorResponse>(
  'auth/register/rejected'
);

export const loginPending = createAction('auth/login/pending');
export const loginFullfield = createAction<LoginResponseDTO>(
  'auth/login/fullfield'
);
export const loginRejected = createAction<ErrorResponse>('auth/login/rejected');

export const logoutPending = createAction('auth/logout/pending');
export const logoutFullfield = createAction<LogoutResponseDTO>(
  'auth/logout/fullfield'
);
export const logoutRejected = createAction<ErrorResponse>(
  'auth/logout/rejected'
);

export const verifyPending = createAction('auth/verify/pending');
export const verifyFullfield = createAction('auth/verify/fullfield');
export const verifyRejected = createAction('auth/verify/rejected');

export const resendVerificationPending = createAction(
  'auth/resendVerification/pending'
);
export const resendVerificationFullfield = createAction(
  'auth/resendVerification/fullfield'
);
export const resendVerificationRejected = createAction(
  'auth/resendVerification/rejected'
);
