import axios from 'axios';
import {
  SearchAuthorsResponseDTO,
  GetAuthorByIdResponseDTO,
  GetAuthorWorksResponseDTO,
} from '../types/responses';

export async function fetchAuthors(
  q = '',
  page = 1
): Promise<SearchAuthorsResponseDTO> {
  const { data } = await axios({
    method: 'GET',
    url: '/authors',
    params: { q, page },
  });
  return data;
}

export async function findByid(
  authorId: number
): Promise<GetAuthorByIdResponseDTO> {
  const { data } = await axios({
    method: 'GET',
    url: `/authors/${authorId}`,
  });
  return data;
}

export async function getAuthorImages(
  authorId: number
): Promise<GetAuthorWorksResponseDTO> {
  const { data } = await axios({
    method: 'GET',
    url: `/authors/${authorId}/images`,
  });
  return data;
}
