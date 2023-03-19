import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename="/pet-project-1">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
