import { useState, useEffect } from 'react';
import { content } from 'types/content';
import axios from 'utils/axios';
import { AxiosResponse } from 'axios';
import QuestionPage from 'pages/test/QuestionPage';
import ResultPage from 'pages/test/ResultPage';

const TestPage = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [choseNo, setChoseNo] = useState(-1);
  const [contents, setContents] = useState<content[]>([]);

  useEffect(() => {
    axios.get('/contents').then((res: AxiosResponse<content[]>) => {
      setContents(res.data);
    });
  }, []);

  if (contents.length === 0) return null;

  const content = contents[questionNo];
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
        testTitle={content.testTitle}
        answer={content.answers[choseNo]}
        onClickButton={() => {
          setQuestionNo((prev) => (prev + 1) % contents.length);
          setChoseNo(-1);
        }}
      />
    );
  }
};

export default TestPage;
