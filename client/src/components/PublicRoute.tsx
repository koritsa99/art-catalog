import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getUser } from '../redux/auth/auth.selectors';
import { urls } from '../config/routes';

interface IProps {
  children: React.ReactElement;
  isRestricted: boolean;
}

function PublicRoute({ children, isRestricted }: IProps) {
  const user = useSelector(getUser);

  return user && isRestricted ? <Navigate to={urls.home} replace /> : children;
}

export default PublicRoute;
