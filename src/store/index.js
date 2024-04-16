import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { globalReducer } from './modules'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const rootReducer = combineReducers({
  global: globalReducer
})

const reducerProxy = (state, action) => {
  const actionType = action?.meta?.requestStatus
  const key = action?.type.split('/')[0]

  if (actionType) {
    const loading = { ...state[key], loading: actionType === 'pending' }
    return rootReducer({ ...state, [key]: loading }, action)
  }

  return rootReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, reducerProxy)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

let persistor = persistStore(store)

export { store, persistor }