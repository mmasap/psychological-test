import { useSelector } from 'react-redux';
import ContentListPage from 'pages/admin/ContentListPage';
import RegisterPage from 'pages/admin/RegisterPage';
import { RootState } from 'store';

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
