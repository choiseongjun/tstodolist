import { createStore, combineReducers,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import listReducer from './reducers/listReducer';
import notificationReducer from './reducers/notificationReducer';
import createSagaMiddleware from 'redux-saga';
import listSagas from './sagas/listSagas';

const rootReducer = combineReducers({
  list: listReducer,
  notification: notificationReducer
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(listSagas);
export type RootState = ReturnType<typeof rootReducer>;

export default store;