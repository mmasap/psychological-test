import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import IndexPage from './pages/IndexPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
