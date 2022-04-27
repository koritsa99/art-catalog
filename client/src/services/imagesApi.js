import axios from '../config/axiosDefault';

export function searchImages() {
  return axios({
    method: 'GET',
    url: '/images',
  }).then(({ data }) => data);
}

export function createImage(data) {
  return axios({
    method: 'POST',
    url: '/images',
    data,
  }).then(({ data }) => data);
}

export function fetchImageDetails(imageId) {
  return axios({
    method: 'GET',
    url: `/images/${imageId}`,
  }).then(({ data }) => data);
}
