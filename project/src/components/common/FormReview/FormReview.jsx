import React from 'react';

function FormReview() {
  const [rating, setRating] = React.useState(1);
  const [review, setReview] = React.useState('');

  function handleChangeRating(e) {
    e.preventDefault();
    const { value } = e.target;
    setRating(+value);
  }

  function handleChangeText(e) {
    e.preventDefault();
    const { value } = e.target;
    setReview(value);
  }


  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
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
            name="review-text" id="review-text"
            placeholder="Review text"
            onChange={handleChangeText}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>

      {/*
        * Времено, чтобы eslint не ругался.
        * Далее, эту переменную будем использовать в объекте, для отправки на сервер.
      */}
      {review}
    </div>
  );
}


export default FormReview;
