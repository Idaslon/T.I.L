import { createStore, Store, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { State } from './ducks/mystate_EXAMPLE/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSagas';
import persistReducers from './persist/reducers';

export interface ApplicationState {
  mystate: State;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(persistReducers(rootReducer), applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
