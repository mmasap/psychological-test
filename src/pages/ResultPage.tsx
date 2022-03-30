import Button from '../components/Button';

type AnswerProps = {
  onClickButton: () => void;
  result: string;
};

const ResultPage: React.FC<AnswerProps> = ({ onClickButton, result }) => {
  return (
    <div className="bg-gray-200">
      <div className="text-center p-2">
        <p>{result}</p>
        <Button onClick={onClickButton}>Next</Button>
      </div>
    </div>
  );
};

export default ResultPage;
