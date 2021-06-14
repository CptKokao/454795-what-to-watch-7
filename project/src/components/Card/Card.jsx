import React from 'react';
import PropTypes from 'prop-types';

function Card({name, previewImage, id, active, setActive}) {

  function changeActive() {
    setActive(id);
    // console.log(active)
  }

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => changeActive(id)} >
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
  id: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Card;
