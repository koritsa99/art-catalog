import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import React from 'react';

import { getUser } from '../redux/auth/auth.selectors';
import { urls } from '../config/routes';

interface IProps {
  children: React.ReactElement;
}

function PrivateRoute({ children }: IProps) {
  const user = useSelector(getUser);

  return user ? children : <Navigate to={urls.login} replace />;
}

export default PrivateRoute;
