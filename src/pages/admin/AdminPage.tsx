import { useState } from 'react';
import ContentListPage from './ContentListPage';
import RegisterPage from './RegisterPage';

export type PageName = 'contentList' | 'register';

const AdminPage = () => {
  const [displayPage, setDisplayPage] = useState<PageName>('contentList');

  const onChangePage = (pageName: PageName) => setDisplayPage(pageName);

  switch (displayPage) {
    case 'contentList':
      return <ContentListPage onChangePage={onChangePage} />;
    case 'register':
      return <RegisterPage />;
  }
};

export default AdminPage;
