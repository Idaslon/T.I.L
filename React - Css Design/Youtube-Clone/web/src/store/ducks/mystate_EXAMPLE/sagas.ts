import { all, takeLatest } from 'redux-saga/effects';

import { addRequest } from './actions';
import { StateTypes } from './types';

function* add({ payload }: ReturnType<typeof addRequest>) {
  // Code here
}

export default all([takeLatest(StateTypes.ADD_REQUEST, add)]);
