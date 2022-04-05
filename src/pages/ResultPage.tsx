import { useState } from 'react';
import Button from '../components/Button';
import Window from '../components/Window';
import FadeOutText from '../components/FadeOutText';

type AnswerProps = {
  onClickButton: () => void;
  result: string;
  result_detail: string;
};

const ResultPage: React.FC<AnswerProps> = ({
  onClickButton,
  result,
  result_detail,
}) => {
  const [windowClicked, setWindowClicked] = useState(false);
  return (
    <>
      <div className="text-center p-2">
        <Window onClick={() => setWindowClicked(true)}>
          <div className="py-2">
            <FadeOutText transition_none={windowClicked}>{result}</FadeOutText>
          </div>
          <div className="py-2">
            {result_detail.split('\n').map((row, index) => (
              <FadeOutText
                transition_none={windowClicked}
                key={index}
                delay={1000}
              >
                {row}
              </FadeOutText>
            ))}
          </div>
        </Window>
      </div>
      <div className="flex justify-center">
        <Button onClick={onClickButton}>Next</Button>
      </div>
    </>
  );
};

export default ResultPage;
