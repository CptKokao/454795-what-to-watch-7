import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({name, id, previewVideoLink, posterImage}) {
  const [delayHandler, setDelayHandler] =  React.useState(null);

  const player = React.useRef(null);
  console.log(id)
  function handleMouseEnter () {
    setDelayHandler(setTimeout(() => {
      player.current.muted = true;
      player.current.play();
      console.log('mouseenter');
    }, 1000));
  }

  function handleMouseLeave () {
    player.current.load();
    // Удаляет setTimeout
    clearTimeout(delayHandler);
    console.log('mouseout');
  }


  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={(e) => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div className="small-film-card__image">
        <video src={previewVideoLink} className="player__video" poster={posterImage} ref={player} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  // active: PropTypes.number.isRequired,
  // setActive: PropTypes.func.isRequired,
};

export default Card;
