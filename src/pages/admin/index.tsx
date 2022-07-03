import { useSelector } from 'react-redux';
import ContentListPage from './ContentListPage';
import RegisterPage from './RegisterPage';
import { RootState } from '../../store';

const AdminPage = () => {
  const mode = useSelector((state: RootState) => state.admin.mode);

  switch (mode) {
    case 'list':
      return <ContentListPage />;
    case 'new':
      return <RegisterPage />;
    default:
      return null;
  }
};

export default AdminPage;
