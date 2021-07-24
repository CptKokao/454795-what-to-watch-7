import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import {loadListReviews} from '../../../store/actions/api-actions/api-actions';
import {getListReviews, getIsDataReviewsLoaded} from '../../../store/reducer/review-data/selectors';
import Loader from '../../../components/common/Loader/Loader';

function Reviews({ id }) {
  const dispatch = useDispatch();
  const listReviews = useSelector(getListReviews);
  const isDataReviewsLoaded = useSelector(getIsDataReviewsLoaded);

  React.useEffect(() => {
    dispatch(loadListReviews(id));
  }, [dispatch, id]);

  if (!isDataReviewsLoaded) {
    return <Loader/>;
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {listReviews.map((item) => (
          <div className="review" key={item.id}>
            <blockquote className="review__quote">
              <p className="review__text">{item.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{item.user && item.user.name}</cite>
                <time className="review__date" dateTime={item.date}>{item.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{item.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Reviews;
