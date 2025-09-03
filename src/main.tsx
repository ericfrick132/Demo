import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthWrapper from './components/AuthWrapper';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <AuthWrapper>
    <App />
  </AuthWrapper>
);