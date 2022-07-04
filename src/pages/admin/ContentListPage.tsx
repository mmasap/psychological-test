import { useEffect } from 'react';
import Button from 'components/ui/Button';
import { adminActions, fetchContents } from 'store/admin';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';

const ContentListPage = () => {
  const contents = useAppSelector((state) => state.admin.contents);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContents());
  }, [dispatch]);

  return (
    <div>
      <div className="mb-4">
        <span className="mr-4">テスト一覧</span>
        <Button onClick={() => dispatch(adminActions.changeMode('new'))}>
          新規作成
        </Button>
      </div>
      {contents.map((content, index) => (
        <div className="border rounded border-indigo-500 p-2 mb-4" key={index}>
          <div>{content.question}</div>
        </div>
      ))}
    </div>
  );
};

export default ContentListPage;
