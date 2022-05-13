import { operations } from './schema';

export type LoginResponseDTO =
  operations['login']['responses']['200']['content']['application/json'];
export type RegisterResponseDTO =
  operations['register']['responses']['200']['content']['application/json'];
export type LogoutResponseDTO =
  operations['logout']['responses']['200']['content']['application/json'];
export type ResendVerificationResponseDTO =
  operations['resendVerification']['responses']['200']['content']['application/json'];
export type VerifyUserResponseDTO =
  operations['verifyUser']['responses']['200']['content']['application/json'];
export type SearchAuthorsResponseDTO =
  operations['searchAuthors']['responses']['200']['content']['application/json'];
export type GetAuthorByIdResponseDTO =
  operations['getAuthorById']['responses']['200']['content']['application/json'];
export type GetAuthorWorksResponseDTO =
  operations['getAuthorWorks']['responses']['200']['content']['application/json'];
export type SearchImagesResponseDTO =
  operations['searchImages']['responses']['200']['content']['application/json'];
export type CreateImageResponseDTO =
  operations['createImage']['responses']['200']['content']['application/json'];
export type GetImageByIdResponseDTO =
  operations['getImageById']['responses']['200']['content']['application/json'];
export type GetUserByIdResponseDTO =
  operations['getUserById']['responses']['200']['content']['application/json'];
export type GetUserLikesResponseDTO =
  operations['getUserLikes']['responses']['200']['content']['application/json'];
export type GetUserUploadsResponseDTO =
  operations['getUserUploads']['responses']['200']['content']['application/json'];
