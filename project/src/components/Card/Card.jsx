import React from 'react';
import PropTypes from 'prop-types';

function Card({title, imgPath}) {

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imgPath} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
};

export default Card;
