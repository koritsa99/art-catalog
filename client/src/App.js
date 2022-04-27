import { Routes, Route, Navigate } from 'react-router-dom';

import { routes } from './config/routes';
import Navbar from './components/Navbar';
import Container from './components/Container';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          {routes.map((route) => (
            <Route {...route} />
          ))}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
