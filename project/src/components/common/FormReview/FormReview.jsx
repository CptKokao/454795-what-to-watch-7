import React from 'react';

function FormReview() {
  const [review, setReview] = React.useState({
    rating: 1,
    text: '',
  });

  function handleChangeRating(e) {
    e.preventDefault();
    const { value } = e.target;
    setReview({
      ...review,
      rating: +value,
    });

  }

  function handleChangeText(e) {
    e.preventDefault();
    const { value } = e.target;
    setReview({
      ...review,
      text: value,
    });
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars" >
            {[...Array(10)].map((item, i) => {
              const index = [...Array(10)].length - i;
              return (
                <React.Fragment key={index}>
                  <input
                    className="rating__input"
                    id={`star-${index}`}
                    type="radio"
                    name="rating"
                    value={index}
                    onChange={handleChangeRating}
                    defaultChecked={index === review.rating}
                  />
                  <label className="rating__label" htmlFor={`star-${index}`}>{`Rating ${index} ${review.rating}`}</label>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            onChange={handleChangeText}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}


export default FormReview;
