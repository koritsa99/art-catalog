import { lazy } from 'react';

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
    component: lazy(() =>
      import('../pages/Home' /* webpackChunkName: 'Home' */)
    ),
  },
  {
    key: 'notFound',
    path: urls.notFound,
    component: lazy(() =>
      import('../pages/NotFound' /* webpackChunkName: 'NotFound' */)
    ),
  },
  {
    key: 'search',
    path: urls.search,
    component: lazy(() =>
      import('../pages/Search' /* webpackChunkName: 'Search' */)
    ),
  },
  {
    key: 'createImage',
    path: urls.createImage,
    component: lazy(() =>
      import('../pages/CreateImage' /* webpackChunkName: 'CreateImage' */)
    ),
  },
  {
    key: 'imagePage',
    path: `${urls.images}/:imageId`,
    component: lazy(() =>
      import('../pages/ImagePage' /* webpackChunkName: 'ImagePage' */)
    ),
  },
  {
    key: 'authorPage',
    path: `${urls.authors}/:authorId`,
    component: lazy(() =>
      import('../pages/AuthorPage' /* webpackChunkName: 'AuthorPage' */)
    ),
  },
  {
    key: 'register',
    path: urls.register,
    component: lazy(() =>
      import('../pages/Register' /* webpackChunkName: 'Register' */)
    ),
  },
  {
    key: 'login',
    path: urls.login,
    component: lazy(() =>
      import('../pages/Login' /* webpackChunkName: 'Login' */)
    ),
  },
];
