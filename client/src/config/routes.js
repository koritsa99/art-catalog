import Home from '../pages/Home';

export const urls = {
  home: '/',
  images: '/images',
  authors: '/authors',
  createImage: '/images/create',
  createAuthor: '/authors/create',
  search: '/search',
};

export const routes = [
  {
    key: 'home',
    path: urls.home,
    element: <Home />,
  },
];
