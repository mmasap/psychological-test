import { useState } from 'react';
import Header from './components/Header';
import Question from './pages/Question';

const App = () => {
  const [mode, setMode] = useState('question');

  const getContent = () => {
    switch (mode) {
      case 'question':
        return <Question onClickButton={() => setMode('answer')} />;
      case 'answer':
        return <div>answer</div>;
      default:
        return <div>loading</div>;
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4">
      <Header />
      {getContent()}
    </div>
  );
};

export default App;
