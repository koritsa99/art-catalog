import axios from 'axios';

export function register(userData) {
  return axios({
    method: 'POST',
    url: '/auth/register',
    data: userData,
  }).then((res) => res.data);
}

export function login(userData) {
  return axios({
    method: 'POST',
    url: '/auth/login',
    data: userData,
  }).then((res) => res.data);
}

export function verify(verificationToken) {
  return axios({
    method: 'GET',
    url: `/auth/verify/${verificationToken}`,
  }).then((res) => res.data);
}

export function resendVerification(email) {
  return axios({
    method: 'POST',
    url: '/auth/resend-verification',
    body: { email },
  }).then((res) => res.data);
}

export function logout() {
  return axios({
    method: 'POST',
    url: '/auth/logout',
  }).then((res) => res.data);
}
