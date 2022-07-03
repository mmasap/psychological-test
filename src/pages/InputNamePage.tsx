import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Label from '../components/Label';
import Button from '../components/ui/Button';
import InputText from '../components/InputText';
import { uiActions } from '../store/ui';

const InputNamePage: React.FC = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  return (
    <>
      <Label htmlFor="username">ユーザー名</Label>
      <div className="mb-4">
        <InputText
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="ユーザー名"
        />
      </div>
      <Button
        disabled={!userName}
        onClick={() => dispatch(uiActions.registerUserName(userName))}
      >
        開始
      </Button>
    </>
  );
};

export default InputNamePage;
