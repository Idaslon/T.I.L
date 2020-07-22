import { Reducer } from 'redux';

import { State, StateTypes, ActionsTypes } from './types';

const INITIAL_STATE: State = {
  data: [],
};

const reducer: Reducer<State, ActionsTypes> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StateTypes.ADD_REQUEST:
      return state;
    case StateTypes.ADD_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default reducer;
