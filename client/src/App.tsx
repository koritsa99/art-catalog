import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { routes, urls } from './config/routes';
import { setToken } from './config/axios';
import { getUser } from './redux/auth/auth.selectors';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Spinner from './components/Spinner';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  const user = useSelector(getUser);

  useEffect(() => {
    if (user?.authToken) {
      setToken(user.authToken);
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <Container>
        <Suspense fallback={<Spinner />}>
          <Routes>
            {routes.map(
              ({
                component: Component,
                isPrivate,
                isRestricted,
                ...routeProps
              }) => {
                const element = isPrivate ? (
                  <PrivateRoute>
                    <Component />
                  </PrivateRoute>
                ) : (
                  <PublicRoute isRestricted={isRestricted}>
                    <Component />
                  </PublicRoute>
                );

                return <Route {...routeProps} element={element} />;
              }
            )}

            <Route path="*" element={<Navigate to={urls.notFound} replace />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
