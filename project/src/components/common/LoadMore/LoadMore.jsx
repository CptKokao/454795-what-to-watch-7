import React from 'react';
import {useDispatch} from 'react-redux';

import {changeLimit} from '../../../store/actions/actions/actions';

function LoadMore() {
  const dispatch = useDispatch();

  function changeLimitFilms() {
    dispatch(changeLimit());
  }

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={changeLimitFilms}>Show more</button>
    </div>
  );
}

export default LoadMore;

