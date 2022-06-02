import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

async function main() {
  if (process.env.NODE_ENV === 'development') {
    if (window.location.pathname === '/psychological-test') {
      window.location.pathname = '/psychological-test/';
      return;
    }
    const { worker } = require('./mocks/browser');
    await worker.start({
      serviceWorker: {
        url: '/psychological-test/mockServiceWorker.js',
      },
    });
  }

  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
main();
