import React from 'react';
import PropTypes from 'prop-types';

function Overview({ rating, description, scoresCount, director, starring}) {
  const getLevel = React.useCallback(() => {
    if (Math.trunc(rating) === 10) {
      return 'Awesome';
    }
    if (Math.trunc(rating) > 8) {
      return 'Very good';
    }
    if (Math.trunc(rating) > 5) {
      return 'Good';
    }
    if (Math.trunc(rating) > 3) {
      return 'Normal';
    }
    return 'Bad';
  }, [rating]);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getLevel()}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring:&nbsp;
            {starring && starring.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

Overview.propTypes = {
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  director: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Overview;
