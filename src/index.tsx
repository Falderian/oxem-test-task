import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './reset.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from 'helpers/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
