import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './contexts/auth';

import GlobalStyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
