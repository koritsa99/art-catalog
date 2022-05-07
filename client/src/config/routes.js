import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Search from '../pages/Search';
import CreateImage from '../pages/CreateImage';
import ImagePage from '../pages/ImagePage';
import AuthorPage from '../pages/AuthorPage';
import Register from '../pages/Register';
import Login from '../pages/Login';

export const urls = {
  home: '/',
  notFound: '/404',
  images: '/images',
  authors: '/authors',
  createImage: '/images/create',
  createAuthor: '/authors/create',
  search: '/search',
  login: '/login',
  register: '/register',
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
    key: 'search',
    path: urls.search,
    element: <Search />,
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
  {
    key: 'authorPage',
    path: `${urls.authors}/:authorId`,
    element: <AuthorPage />,
  },
  {
    key: 'register',
    path: urls.register,
    element: <Register />,
  },
  {
    key: 'login',
    path: urls.login,
    element: <Login />,
  },
];
