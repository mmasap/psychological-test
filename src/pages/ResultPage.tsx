import { useState } from 'react';
import Button from '../components/Button';
import Window from '../components/Window';
import FadeOut from '../components/FadeOut';

type AnswerProps = {
  onClickButton: () => void;
  testContent: string;
  answer: {
    choice: string;
    result: string;
    result_detail: string;
  };
};

const ResultPage: React.FC<AnswerProps> = ({
  onClickButton,
  testContent,
  answer,
}) => {
  const [displayed, setDisplayed] = useState(false);
  return (
    <>
      <div className="text-center p-2">
        <Window onClick={() => setDisplayed(true)}>
          <div className="py-2">{testContent}</div>
          <div className="py-2">「{answer.choice}」を選んだあなたは</div>
          <div className="py-2">
            <FadeOut transition_none={displayed}>{answer.result}</FadeOut>
          </div>
          <div className="py-2">
            <FadeOut
              transition_none={displayed}
              delay={1000}
              fadeOutCallback={() => setDisplayed(true)}
            >
              {answer.result_detail.split('\n').map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </FadeOut>
          </div>
        </Window>
      </div>
      <div className="flex justify-center">
        <Button onClick={onClickButton} disabled={!displayed}>
          Next
        </Button>
      </div>
    </>
  );
};

export default ResultPage;
