import axios from 'axios';

export function register(userData, { rejectWithValue }) {
  return axios({
    method: 'POST',
    url: '/auth/register',
    data: userData,
  })
    .then((res) => res.data)
    .catch((error) => rejectWithValue(error.response.data));
}

export function login(userData, { rejectWithValue }) {
  return axios({
    method: 'POST',
    url: '/auth/login',
    data: userData,
  })
    .then((res) => res.data)
    .catch((error) => rejectWithValue(error.response.data));
}

export function verify(verificationToken, { rejectWithValue }) {
  return axios({
    method: 'GET',
    url: `/auth/verify/${verificationToken}`,
  })
    .then((res) => res.data)
    .catch((error) => rejectWithValue(error.response.data));
}

export function resendVerification(email, { rejectWithValue }) {
  return axios({
    method: 'POST',
    url: '/auth/resend-verification',
    body: { email },
  })
    .then((res) => res.data)
    .catch((error) => rejectWithValue(error.response.data));
}

export function logout(_, { rejectWithValue }) {
  return axios({
    method: 'POST',
    url: '/auth/logout',
  })
    .then((res) => res.data)
    .catch((error) => rejectWithValue(error.response.data));
}
