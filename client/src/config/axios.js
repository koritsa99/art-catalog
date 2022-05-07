import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/v1';

export function setToken(token) {
  axios.defaults.headers.authorization = `Bearer ${token}`;
}

export function unsetToken() {
  axios.defaults.headers.authorization = undefined;
}
