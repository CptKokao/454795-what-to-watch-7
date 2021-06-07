import React from 'react';
import PropTypes from 'prop-types';

function Card({card}) {

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={card.imgPath} alt={card.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{card.title}</a>
      </h3>
    </article>
  );
}

Card.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imgPath: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Card;
