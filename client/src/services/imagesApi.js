import axios from '../config/axiosDefault';

export function searchImages() {
  return axios({
    method: 'GET',
    url: '/images',
  }).then(({ data }) => data);
}
