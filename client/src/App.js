import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';

import { routes } from './config/routes';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Spinner from './components/Spinner';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Suspense fallback={<Spinner />}>
          <Routes>
            {routes.map(({ component: Component, ...routeProps }) => (
              <Route {...routeProps} element={<Component />} />
            ))}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
