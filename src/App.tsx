import { useState } from 'react';
import Header from './components/Header';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import contents from './json/contents.json';

const App = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [choseNo, setChoseNo] = useState(-1);

  const getDisplayPage = () => {
    if (choseNo < 0) {
      return (
        <QuestionPage
          question={contents[questionNo].question}
          choices={contents[questionNo].answers.map((answer) => answer.choice)}
          onClickButton={(chooseNo) => {
            setChoseNo(chooseNo);
          }}
        />
      );
    } else {
      return (
        <ResultPage
          result={contents[questionNo].answers[choseNo].result}
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
      {getDisplayPage()}
    </div>
  );
};

export default App;
