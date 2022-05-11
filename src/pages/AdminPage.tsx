import { useRef, useEffect, useState } from 'react';
import Button from '../components/Button';
import InputText from '../components/InputText';
import Label from '../components/Label';

const AdminPage = () => {
  const [users, setUsers] = useState<any>([]);
  const userNameRef = useRef<HTMLInputElement>(null);

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

  const registerQuestion = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch(
      'https://psychological-test-bd15b-default-rtdb.firebaseio.com/user.json',
      {
        method: 'POST',
        body: JSON.stringify({ userName: userNameRef.current!.value }),
      }
    );
    userNameRef.current!.value = '';
    fetchQuestion();
  };

  const deleteQuestion = async (id: string) => {
    await fetch(
      `https://psychological-test-bd15b-default-rtdb.firebaseio.com/user/${id}.json`,
      { method: 'DELETE' }
    );
    fetchQuestion();
  };

  return (
    <>
      <form onSubmit={registerQuestion}>
        <div className="mb-2">
          <Label htmlFor="username">Username</Label>
        </div>
        <div>
          <InputText
            inputRef={userNameRef}
            id="username"
            placeholder="Username"
          />
        </div>
        <Button>保存</Button>
      </form>
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
