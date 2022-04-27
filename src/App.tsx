import { Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import IndexPage from './pages/IndexPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="admin" element={<AdminPage />} />
    </Routes>
  );
};

export default App;
