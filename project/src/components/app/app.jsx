import React from 'react';
import PropTypes from 'prop-types';
import Main from '../Main/Main';

function App({film, cards}) {
  return <Main film={film} cards={cards} />;
}

App.propTypes = {
  film: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),
  ).isRequired,
  cards: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
