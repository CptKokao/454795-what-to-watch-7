import React from 'react';
import PropTypes from 'prop-types';
import Main from '../Main/Main';

function App({film, cards}) {
  return <Main film={film} cards={cards} />;
}

App.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
