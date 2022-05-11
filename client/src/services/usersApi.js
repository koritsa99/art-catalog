import axios from 'axios';

export function findById(userId) {
  return axios({
    method: 'GET',
    url: `/users/${userId}`,
  }).then((res) => res.data);
}

export function getLikes(userId) {
  return axios({
    method: 'GET',
    url: `/users/${userId}/likes`,
  }).then((res) => res.data);
}

export function getUploads(userId) {
  return axios({
    method: 'GET',
    url: `/users/${userId}/uploads`,
  }).then((res) => res.data);
}
