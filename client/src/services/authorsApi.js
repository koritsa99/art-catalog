import axios from 'axios';

export function fetchAuthors(q = '', page = 1) {
  return axios({
    method: 'GET',
    url: '/authors',
    params: { q, page },
  }).then(({ data }) => data);
}

export function findByid(authorId) {
  return axios({
    method: 'GET',
    url: `/authors/${authorId}`,
  }).then(({ data }) => data);
}

export function getAuthorImages(authorId) {
  return axios({
    method: 'GET',
    url: `/authors/${authorId}/images`,
  }).then(({ data }) => data);
}
