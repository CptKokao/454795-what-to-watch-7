import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';

import {checkAuth, requireAuthorization} from './store/actions';
import {createAPI} from './services/api';
import {AuthorizationStatus} from './const';
import App from './components/App/app';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
