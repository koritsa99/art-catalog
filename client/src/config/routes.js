import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import CreateImage from '../pages/CreateImage';
import ImagePage from '../pages/ImagePage';

export const urls = {
  home: '/',
  notFound: '/404',
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
  {
    key: 'notFound',
    path: urls.notFound,
    element: <NotFound />,
  },
  {
    key: 'createImage',
    path: urls.createImage,
    element: <CreateImage />,
  },
  {
    key: 'imagePage',
    path: `${urls.images}/:imageId`,
    element: <ImagePage />,
  },
];
