import axios from 'axios';

export async function searchImages(q = '', page = 1) {
  const { data } = await axios({
    method: 'GET',
    url: '/images',
    params: { q, page },
  });
  return data;
}

export async function createImage(data: any) {
  const { data: data_1 } = await axios({
    method: 'POST',
    url: '/images',
    data,
  });
  return data_1;
}

export async function fetchImageDetails(imageId: number) {
  const { data } = await axios({
    method: 'GET',
    url: `/images/${imageId}`,
  });
  return data;
}
