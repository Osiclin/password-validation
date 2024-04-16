import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { globalReducer } from '../../store/modules';

const reducerProxy = combineReducers({
  global: globalReducer,
});

const reducer = (state, action) => {
  const actionType = action.meta?.requestStatus;
  const key = action.type.split('/')[0];

  if (action.type !== 'logout' && actionType) {
    const loading = { ...state[key], loading: actionType === 'pending' ? true : false };
    return reducerProxy({ ...state, [key]: loading }, action);
  }

  return reducerProxy(state, action);
};

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer,
    preloadedState,
  });
};
