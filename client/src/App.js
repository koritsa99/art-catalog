import { Routes, Route, Navigate } from 'react-router-dom';

import { routes } from './config/routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
