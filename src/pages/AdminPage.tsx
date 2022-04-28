import { useRef, useEffect, useState } from 'react';
import Button from '../components/Button';

const AdminPage = () => {
  const [users, setUsers] = useState<any>([]);
  const userNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
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

  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch(
      'https://psychological-test-bd15b-default-rtdb.firebaseio.com/user.json',
      {
        method: 'POST',
        body: JSON.stringify({ userName: userNameRef.current!.value }),
      }
    );
    userNameRef.current!.value = '';
    fetchUser();
  };

  const deleteUser = async (id: string) => {
    await fetch(
      `https://psychological-test-bd15b-default-rtdb.firebaseio.com/user/${id}.json`,
      { method: 'DELETE' }
    );
    fetchUser();
  };

  return (
    <>
      <form onSubmit={registerUser}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          ref={userNameRef}
          placeholder="Username"
        />
        <Button>保存</Button>
      </form>
      <div>登録ユーザー</div>
      {users.map((user: any) => (
        <div key={user.id} style={{ marginBottom: 8 }}>
          <span>{user.userName}</span>
          <Button onClick={() => deleteUser(user.id)}>削除</Button>
        </div>
      ))}
    </>
  );
};

export default AdminPage;
