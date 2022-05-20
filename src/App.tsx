import { useState } from 'react';
import Header from './components/Header';
import InputNamePage from './pages/InputNamePage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import contents from './json/contents.json';
import AdminPage from './pages/AdminPage';

const App = () => {
  const [userName, setUserName] = useState('');
  const [questionNo, setQuestionNo] = useState(0);
  const [choseNo, setChoseNo] = useState(-1);

  const content = contents[questionNo];

  const getDisplayPage = () => {
    if (!userName) {
      return (
        <InputNamePage registerName={(name: string) => setUserName(name)} />
      );
    } else if (userName === 'admin') {
      return <AdminPage />;
    } else if (choseNo < 0) {
      return (
        <QuestionPage
          question={content.question}
          choices={content.answers.map((answer) => answer.choice)}
          onClickButton={(chooseNo) => {
            setChoseNo(chooseNo);
          }}
        />
      );
    } else {
      return (
        <ResultPage
          testTitle={content.test_title}
          answer={content.answers[choseNo]}
          onClickButton={() => {
            setQuestionNo((prev) => (prev + 1) % contents.length);
            setChoseNo(-1);
          }}
        />
      );
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
