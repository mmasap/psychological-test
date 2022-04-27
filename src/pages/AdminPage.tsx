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
    setUsers(Object.keys(json).map((key) => ({ id: key, ...json[key] })));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(
      'https://psychological-test-bd15b-default-rtdb.firebaseio.com/user.json',
      {
        method: 'POST',
        body: JSON.stringify({ userName: userNameRef.current!.value }),
      }
    );
    userNameRef.current!.value = '';
    fetchUser();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
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
        <p key={user.id}>{user.userName}</p>
      ))}
    </>
  );
};

export default AdminPage;
