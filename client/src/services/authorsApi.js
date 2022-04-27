import axios from '../config/axiosDefault';

export function fetchAuthors(searchQuery) {
  return axios({
    method: 'GET',
    url: '/authors',
    params: {
      q: searchQuery,
    },
  }).then(({ data }) => data);
}
