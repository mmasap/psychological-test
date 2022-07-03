import { useSelector } from 'react-redux';

import Header from 'components/Header';
import InputNamePage from 'pages/InputNamePage';
import AdminPage from 'pages/admin';
import TestPage from 'pages/test';
import { RootState } from 'store';

const App = () => {
  const { userName } = useSelector((state: RootState) => state.ui);

  const getDisplayPage = () => {
    if (!userName) {
      return <InputNamePage />;
    } else if (userName === 'admin') {
      return <AdminPage />;
    } else {
      return <TestPage />;
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4">
      <Header />
      <div className="p-2 bg-gray-200">
        {userName && <p>ユーザー名: {userName}</p>}
        {getDisplayPage()}
      </div>
    </div>
  );
};

export default App;
