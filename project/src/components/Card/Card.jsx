import React from 'react';
import PropTypes from 'prop-types';

function Card({name, previewImage}) {


  return (
    <article className="small-film-card catalog__films-card" >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default Card;
