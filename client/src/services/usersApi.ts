import axios from 'axios';

export async function findById(userId: number) {
  const res = await axios({
    method: 'GET',
    url: `/users/${userId}`,
  });
  return res.data;
}

export async function getLikes(userId: number) {
  const res = await axios({
    method: 'GET',
    url: `/users/${userId}/likes`,
  });
  return res.data;
}

export async function getUploads(userId: number) {
  const res = await axios({
    method: 'GET',
    url: `/users/${userId}/uploads`,
  });
  return res.data;
}
