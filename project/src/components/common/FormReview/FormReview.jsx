import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { addReview } from '../../../store/actions';
import {APIRoute} from '../../../const';

function FormReview({ onSubmit, id }) {
  const history = useHistory();

  const [rating, setRating] = React.useState(1);
  const [review, setReview] = React.useState('');
  const [valid, seValid] = React.useState(false);

  function handleChangeRating(e) {
    e.preventDefault();
    const { value } = e.target;
    setRating(+value);
  }

  function handleChangeText(e) {
    e.preventDefault();
    const MAX_LENGTH = 400;
    const MIN_LENGTH = 50;
    const { value, textLength } = e.target;

    setReview(value);

    if (textLength >= MIN_LENGTH && textLength <= MAX_LENGTH) {
      seValid(true);
    } else {
      seValid(false);
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      rating: rating,
      comment: review,
      id: id,
    })
      .then(() => history.push(`${APIRoute.FILMS}/${id}`));
  };


  return (
    <div className="add-review">
      <form
        onSubmit={handleSubmit}
        action="#"
        className="add-review__form"
      >
        <div className="rating">
          <div className="rating__stars" >
            {[...Array(10)].map((item, i, array) => {
              const index = array.length - i;
              return (
                <React.Fragment key={index}>
                  <input
                    className="rating__input"
                    id={`star-${index}`}
                    type="radio"
                    name="rating"
                    value={index}
                    onChange={handleChangeRating}
                    defaultChecked={index === rating}
                  />
                  <label className="rating__label" htmlFor={`star-${index}`}>{`Rating ${index} ${rating}`}</label>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={handleChangeText}
          />
          <div className="add-review__submit">
            <button
              disabled={!valid ? 'disabled' : ''}
              className="add-review__btn"
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
      </form>

      {review}
    </div>
  );
}

FormReview.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (authData, id) => dispatch(addReview(authData, id)),
});

export {FormReview};
export default connect(null, mapDispatchToProps)(FormReview);
