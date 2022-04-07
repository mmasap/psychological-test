import { useState } from 'react';
import Header from './components/Header';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import contents from './json/contents.json';

const App = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [choseNo, setChoseNo] = useState(-1);

  const content = contents[questionNo];

  const getDisplayPage = () => {
    if (choseNo < 0) {
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
          testContent={content.test_content}
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
      <div className="p-2 bg-gray-200">{getDisplayPage()}</div>
    </div>
  );
};

export default App;
