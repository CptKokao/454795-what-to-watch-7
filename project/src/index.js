import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/App/App';
import films from '../src/mocks/films';
import promo from '../src/mocks/promo';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App films={films} promo={promo} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
