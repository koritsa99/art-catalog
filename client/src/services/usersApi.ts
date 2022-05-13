import axios from 'axios';

import {
  GetUserByIdResponseDTO,
  GetUserLikesResponseDTO,
  GetUserUploadsResponseDTO,
} from '../types/responses';

export async function findById(
  userId: number
): Promise<GetUserByIdResponseDTO> {
  const res = await axios({
    method: 'GET',
    url: `/users/${userId}`,
  });
  return res.data;
}

export async function getLikes(
  userId: number
): Promise<GetUserLikesResponseDTO> {
  const res = await axios({
    method: 'GET',
    url: `/users/${userId}/likes`,
  });
  return res.data;
}

export async function getUploads(
  userId: number
): Promise<GetUserUploadsResponseDTO> {
  const res = await axios({
    method: 'GET',
    url: `/users/${userId}/uploads`,
  });
  return res.data;
}
