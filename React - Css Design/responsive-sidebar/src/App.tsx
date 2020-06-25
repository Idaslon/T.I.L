import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar'
import GlobalStyles from './styles/global'
import Routes from './routes';

import DefaultLayout from './pages/_layout/Default'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Sidebar />

      <DefaultLayout>
        <Routes />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
