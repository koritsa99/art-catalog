import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getUser } from '../redux/auth/auth.selectors';
import { urls } from '../config/routes';

function PrivateRoute({ children }) {
  const user = useSelector(getUser);

  return user ? children : <Navigate to={urls.login} replace />;
}

export default PrivateRoute;
