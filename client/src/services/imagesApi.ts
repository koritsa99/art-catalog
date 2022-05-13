import axios from 'axios';

import {
  SearchImagesResponseDTO,
  CreateImageResponseDTO,
  GetImageByIdResponseDTO,
} from '../types/responses';

export async function searchImages(
  q = '',
  page = 1
): Promise<SearchImagesResponseDTO> {
  const { data } = await axios({
    method: 'GET',
    url: '/images',
    params: { q, page },
  });
  return data;
}

export async function createImage(
  imageData: FormData
): Promise<CreateImageResponseDTO> {
  const { data } = await axios({
    method: 'POST',
    url: '/images',
    data: imageData,
  });
  return data;
}

export async function fetchImageDetails(
  imageId: number
): Promise<GetImageByIdResponseDTO> {
  const { data } = await axios({
    method: 'GET',
    url: `/images/${imageId}`,
  });
  return data;
}
