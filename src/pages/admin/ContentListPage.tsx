import { useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import axios from '../../utils/axios';
import { PageName } from './AdminPage';

type Content = {
  testTitle: string;
  question: string;
  answers: {
    choice: string;
    result: string;
    resultDetail: string;
  }[];
};

type ContentListPageProps = {
  onChangePage: (pageName: PageName) => void;
};

const ContentListPage = (props: ContentListPageProps) => {
  const [contents, setQuestions] = useState<Content[]>([]);

  useEffect(() => {
    axios.get('/contents').then((res) => setQuestions(res.data));
  }, []);

  return (
    <div>
      <div className="mb-4">
        <span className="mr-4">テスト一覧</span>
        <Button onClick={() => props.onChangePage('register')}>新規作成</Button>
      </div>
      {contents.map((content, index) => (
        <div className="border rounded border-indigo-500 p-2 mb-4" key={index}>
          <div>{content.question}</div>
        </div>
      ))}
    </div>
  );
};

export default ContentListPage;
