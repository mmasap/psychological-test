import { useState } from 'react';
import Label from '../components/Label';
import Button from '../components/ui/Button';
import InputText from '../components/InputText';

type InputNamePageProps = {
  registerName: (name: string) => void;
};

const InputNamePage: React.FC<InputNamePageProps> = ({ registerName }) => {
  const [userName, setUserName] = useState('');
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
      <Button disabled={!userName} onClick={() => registerName(userName)}>
        開始
      </Button>
    </>
  );
};

export default InputNamePage;
