import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import filmProp from '../../App/film.prop';

function ListCards({ films }) {

  return (
    <div className="catalog__films-list">
      {films.map((card, index) => (
        <Card {...card} id={index} key={card.name}/>
      ))}
    </div>
  );
}

ListCards.propTypes = {
  films: PropTypes.arrayOf(
    filmProp,
  ),
};

export default ListCards;
