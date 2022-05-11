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
  users: '/users',
};

interface IRoute {
  key: string;
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>,
  isPrivate: boolean;
  isRestricted: boolean;
}

export const routes: IRoute[] = [
  {
    key: 'home',
    path: urls.home,
    component: lazy(() =>
      import('../pages/Home' /* webpackChunkName: 'Home' */)
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    key: 'notFound',
    path: urls.notFound,
    component: lazy(() =>
      import('../pages/NotFound' /* webpackChunkName: 'NotFound' */)
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    key: 'search',
    path: urls.search,
    component: lazy(() =>
      import('../pages/Search' /* webpackChunkName: 'Search' */)
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    key: 'createImage',
    path: urls.createImage,
    component: lazy(() =>
      import('../pages/CreateImage' /* webpackChunkName: 'CreateImage' */)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    key: 'imagePage',
    path: `${urls.images}/:imageId`,
    component: lazy(() =>
      import('../pages/ImagePage' /* webpackChunkName: 'ImagePage' */)
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    key: 'authorPage',
    path: `${urls.authors}/:authorId`,
    component: lazy(() =>
      import('../pages/AuthorPage' /* webpackChunkName: 'AuthorPage' */)
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    key: 'register',
    path: urls.register,
    component: lazy(() =>
      import('../pages/Register' /* webpackChunkName: 'Register' */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    key: 'login',
    path: urls.login,
    component: lazy(() =>
      import('../pages/Login' /* webpackChunkName: 'Login' */)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    key: 'profile',
    path: `${urls.users}/:userId`,
    component: lazy(() =>
      import('../pages/Profile' /* webpackChunkName: 'Profile' */)
    ),
    isPrivate: false,
    isRestricted: false,
  },
];
