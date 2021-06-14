import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import films from '../src/mocks/films';


ReactDOM.render(
  <React.StrictMode>
    <App films={films} />
  </React.StrictMode>,
  document.getElementById('root'));
