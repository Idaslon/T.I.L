import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Router history={history}>
            <GlobalStyle />
            <Routes />
          </Router>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
