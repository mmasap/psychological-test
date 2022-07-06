import ContentListPage from 'pages/admin/ContentListPage';
import RegisterPage from 'pages/admin/RegisterPage';
import useAppSelector from 'hooks/useAppSelector';

const AdminPage = () => {
  const mode = useAppSelector((state) => state.admin.mode);

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
