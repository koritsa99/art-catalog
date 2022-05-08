import axios from 'axios';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;

export function setToken(token) {
  axios.defaults.headers.authorization = `Bearer ${token}`;
}

export function unsetToken() {
  axios.defaults.headers.authorization = undefined;
}
