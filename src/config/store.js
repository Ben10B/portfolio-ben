import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import settingsReducer from '../reducers/settingsReducer';

const initialState = {};
const middleware = [thunk];

const rootReducer = combineReducers({
  settings: settingsReducer
});

const store = createStore(rootReducer, initialState, 
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
);

export default store;