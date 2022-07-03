import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/ui/Button';
import { RootState } from 'store';
import { adminActions } from 'store/admin';

const ContentListPage = () => {
  const contents = useSelector((state: RootState) => state.admin.contents);
  const dispatch = useDispatch();

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
