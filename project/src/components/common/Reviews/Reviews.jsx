import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {loadListReviews} from '../../../store/api-actions';
import Loader from '../../../components/common/Loader/Loader';

function Reviews({ id, getReviews, listReviews, isDataReviewsLoaded }) {

  React.useEffect(() => {
    getReviews(id);
  }, [getReviews, id]);

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
  listReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
  getReviews: PropTypes.func.isRequired,
  isDataReviewsLoaded: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getReviews: (id) => dispatch(loadListReviews(id)),
});

const mapStateToProps = ({REVIEW}) => ({
  listReviews: REVIEW.listReviews,
  isDataReviewsLoaded: REVIEW.isDataReviewsLoaded,
});

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
