import { useEffect, useState, Fragment } from 'react';
import Button from '../components/Button';
import InputText from '../components/InputText';
import Label from '../components/Label';

type Answer = {
  choice: string;
  result: string;
  resultDetail: string;
};

type InputAnswerFromProps = {
  answer: Answer;
  index: number;
  displayDeleteButton: boolean;
  onChangeAnswer: (name: keyof Answer, value: string) => void;
  onClickDelete: (deleteIndex: number) => void;
};

const inputAnswerList: { label: string; name: keyof Answer }[] = [
  { label: '選択肢', name: 'choice' },
  { label: '結果', name: 'result' },
  { label: '結果詳細', name: 'resultDetail' },
];

const initAnswerState = {
  choice: '',
  result: '',
  resultDetail: '',
};

const InputAnswerForm = (props: InputAnswerFromProps) => {
  const {
    answer,
    index: answerIndex,
    onChangeAnswer,
    onClickDelete,
    displayDeleteButton,
  } = props;

  return (
    <div style={{ border: 'solid', padding: 4, marginBottom: 4 }}>
      <div className="mb-2">
        <span>選択肢 {answerIndex + 1}</span>
        {displayDeleteButton && (
          <Button onClick={() => onClickDelete(answerIndex)}>削除</Button>
        )}
      </div>
      {inputAnswerList.map((inputAnswer, index) => {
        const id = `${inputAnswer.name}_${index}`;
        return (
          <Fragment key={index}>
            <div className="mb-2">
              <Label htmlFor={id}>{inputAnswer.label}</Label>
            </div>
            <div className="mb-2">
              <InputText
                id={id}
                placeholder={inputAnswer.label}
                value={answer[inputAnswer.name]}
                onChange={(e) =>
                  onChangeAnswer(inputAnswer.name, e.target.value)
                }
              />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

const AdminPage = () => {
  const [users, setUsers] = useState<any>([]);
  const [testTitle, setTestTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState<Answer[]>([
    { ...initAnswerState },
    { ...initAnswerState },
  ]);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    const res = await fetch(
      'https://psychological-test-bd15b-default-rtdb.firebaseio.com/user.json'
    );
    const json: any = await res.json();
    if (json) {
      setUsers(Object.keys(json).map((key) => ({ id: key, ...json[key] })));
    } else {
      setUsers([]);
    }
  };

  const registerQuestion = async () => {
    console.log('registerQuestion');
    console.log(answers);
    // await fetch(
    //   'https://psychological-test-bd15b-default-rtdb.firebaseio.com/user.json',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({ userName: userNameRef.current!.value }),
    //   }
    // );
    // userNameRef.current!.value = '';
    // fetchQuestion();
  };

  const deleteQuestion = async (id: string) => {
    await fetch(
      `https://psychological-test-bd15b-default-rtdb.firebaseio.com/user/${id}.json`,
      { method: 'DELETE' }
    );
    fetchQuestion();
  };

  const onChangeAnswer = (name: keyof Answer, value: string, index: number) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index][name] = value;
      return newAnswers;
    });
  };

  return (
    <>
      <div>
        <div className="mb-2">
          <Label htmlFor="test_title">テストタイトル</Label>
        </div>
        <div className="mb-2">
          <InputText
            id="test_title"
            placeholder="テストタイトル"
            value={testTitle}
            onChange={(e) => setTestTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="question">質問</Label>
        </div>
        <div className="mb-2">
          <InputText
            id="question"
            placeholder="質問"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        {answers.map((answer, index) => (
          <InputAnswerForm
            key={index}
            answer={answer}
            index={index}
            onChangeAnswer={(name, value) => onChangeAnswer(name, value, index)}
            displayDeleteButton={answers.length > 2}
            onClickDelete={(index) => {
              setAnswers((prev) => prev.filter((_, i) => i !== index));
            }}
          />
        ))}
        <Button
          onClick={() => {
            setAnswers((prev) => [...prev, { ...initAnswerState }]);
          }}
          disabled={answers.length >= 4}
        >
          追加
        </Button>
      </div>
      <div>
        <Button onClick={registerQuestion}>保存</Button>
      </div>
      <div>登録ユーザー</div>
      {users.map((user: any) => (
        <div key={user.id} style={{ marginBottom: 8 }}>
          <span>{user.userName}</span>
          <Button onClick={() => deleteQuestion(user.id)}>削除</Button>
        </div>
      ))}
    </>
  );
};

export default AdminPage;
