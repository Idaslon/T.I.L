import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar'

import GlobalStyles from './styles/global'

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Sidebar />

      <Routes />
    </BrowserRouter>
  );
}

export default App;
