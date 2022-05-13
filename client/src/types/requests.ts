import { operations } from './schema';

export type RegisterRequestDTO =
  operations['register']['requestBody']['content']['application/json'];
export type LoginRequestDTO =
  operations['login']['requestBody']['content']['application/json'];
export type ResendVerificationRequestDTO =
  operations['resendVerification']['requestBody']['content']['application/json'];
export type CreateImageRequestDTO =
  operations['createImage']['requestBody']['content']['multipart/form-data'];
