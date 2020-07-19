import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import GlobalStyle from './styles/global';
import Routes from './router';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
