import axios, { HeadersDefaults } from 'axios';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;

export interface CommonHeaders extends HeadersDefaults {
  authorization?: string;
}

export function setToken(token: string) {
  (axios.defaults.headers as CommonHeaders).authorization = `Bearer ${token}`;
}

export function unsetToken() {
  (axios.defaults.headers as CommonHeaders).authorization = undefined;
}
