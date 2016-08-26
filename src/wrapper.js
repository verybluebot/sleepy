import React from 'react';
import ReactNative from 'react-native';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import App from './App'

const logger = createLogger();
const createMiddleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, createMiddleware);

const wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

export default wrapper;
