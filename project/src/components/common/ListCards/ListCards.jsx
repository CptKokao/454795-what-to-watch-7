import React from 'react';

import Card from '../Card/Card';
import filmsProp from '../../App/films.prop';

function ListCards({ films }) {

  // const [active, setActive] = React.useState(1);

  return (
    <div className="catalog__films-list">
      {films.map((card, index) => (
        <Card {...card} id={index} key={card.name}/>
      ))}
    </div>
  );
}

ListCards.propTypes = {
  films: filmsProp,
};

export default ListCards;
