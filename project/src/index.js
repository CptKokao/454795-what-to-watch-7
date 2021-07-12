import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {ActionCreator, checkAuth} from './store/actions';
import {createAPI} from './services/api';
import {AuthorizationStatus} from './const';
import App from './components/App/app';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
