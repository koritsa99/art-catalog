import axios from 'axios';

export async function fetchAuthors(q = '', page = 1) {
  const { data } = await axios({
    method: 'GET',
    url: '/authors',
    params: { q, page },
  });
  return data;
}

export async function findByid(authorId: number) {
  const { data } = await axios({
    method: 'GET',
    url: `/authors/${authorId}`,
  });
  return data;
}

export async function getAuthorImages(authorId: number) {
  const { data } = await axios({
    method: 'GET',
    url: `/authors/${authorId}/images`,
  });
  return data;
}
