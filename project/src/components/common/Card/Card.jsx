import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({name, id, previewVideoLink, posterImage}) {
  // Необходим очищение setTimeout
  const [delayHandler, setDelayHandler] =  React.useState(null);

  const player = React.useRef(null);

  const handleMouseEnter = React.useCallback(() => {
    setDelayHandler(setTimeout(() => {
      player.current && (player.current.muted = true);
      player.current && player.current.play();
    }, 1000));
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    player.current && player.current.load();
    clearTimeout(delayHandler);
  }, [delayHandler]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <video src={previewVideoLink} className="player__video" poster={posterImage} ref={player} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" onClick={handleMouseLeave} to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
};

export default Card;
