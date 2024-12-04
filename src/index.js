import React from 'react';
import ReactDOM from 'react-dom/client';
import WebApp from './app';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const renderApp = () => {
  root.render(
    <BrowserRouter>
      <WebApp />
    </BrowserRouter>
  );
}

renderApp();