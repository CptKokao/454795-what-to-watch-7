import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import filmProp from '../../App/film.prop';

function ListCards({ listFilms }) {
  return (
    <div className="catalog__films-list">
      {listFilms.map((card) => (
        <Card {...card} id={card.id} key={card.id}/>
      ))}
    </div>
  );
}

ListCards.propTypes = {
  listFilms: PropTypes.arrayOf(
    filmProp,
  ),
};

export default ListCards;
