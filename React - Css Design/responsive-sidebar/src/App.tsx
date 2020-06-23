import React from 'react';

import Sidebar from './components/Sidebar'
import Main from './pages/Main'

import GlobalStyles from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
