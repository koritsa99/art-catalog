import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getUser } from '../redux/auth/auth.selectors';
import { urls } from '../config/routes';

function PublicRoute({ children, isRestricted }) {
  const user = useSelector(getUser);

  return user && isRestricted ? <Navigate to={urls.home} replace /> : children;
}

export default PublicRoute;
