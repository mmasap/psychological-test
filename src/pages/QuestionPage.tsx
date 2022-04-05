import Button, { buttonColors } from '../components/Button';
import Window from '../components/Window';

type QuestionProps = {
  question: string;
  choices: string[];
  onClickButton: (index: number) => void;
};

const QuestionPage: React.FC<QuestionProps> = ({
  onClickButton,
  question,
  choices,
}) => {
  return (
    <>
      <div className="text-center p-2">
        <Window>
          {question.split('\n').map((q, index) => (
            <p key={index}>{q}</p>
          ))}
        </Window>
      </div>
      <div className="flex flex-wrap">
        {choices.map((choice, index) => {
          return (
            <div key={index} className="w-full md:w-1/2 p-2">
              <Button
                color={buttonColors[index % buttonColors.length]}
                fullWidth
                onClick={() => onClickButton(index)}
              >
                {index + 1}. {choice}
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QuestionPage;
