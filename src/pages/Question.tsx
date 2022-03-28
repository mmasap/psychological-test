import Button from '../components/Button';

type Props = {
  onClickButton: () => void;
};

const Question: React.FC<Props> = ({ onClickButton }) => {
  const answers = ['a', 'b', 'c', 'd'];

  return (
    <div className="bg-gray-200">
      <div className="text-center p-2">アイウエオ</div>
      <div className="flex flex-wrap">
        {answers.map((answer, index) => (
          <div key={index} className="w-full md:w-1/2 p-2">
            <Button onClick={onClickButton}>{answer}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
