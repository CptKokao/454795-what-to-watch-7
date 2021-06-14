import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import films from '../src/mocks/films';
import promo from '../src/mocks/promo';

ReactDOM.render(
  <React.StrictMode>
    <App films={films} promo={promo} />
  </React.StrictMode>,
  document.getElementById('root'));
