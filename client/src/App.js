import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './config/routes';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Spinner from './components/Spinner';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
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

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
