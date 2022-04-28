import axios from '../config/axiosDefault';

export function fetchAuthors(q = '', page = 1) {
  return axios({
    method: 'GET',
    url: '/authors',
    params: { q, page },
  }).then(({ data }) => data);
}
