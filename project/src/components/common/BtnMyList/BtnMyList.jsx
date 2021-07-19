import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';

import {addFavoriteFilm, deleteFavoriteFilm, loadListFavotites} from '../../../store/api-actions';
import {getStatus} from '../../../store/user/selectors';
import {getListFavoriteFilms} from '../../../store/film-data/selectors';

function BtnMyList({id}) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadListFavotites());
  }, [dispatch]);

  // Сейчас работает корректно
  async function addFavorite() {
    await dispatch(addFavoriteFilm(id));
    await dispatch(loadListFavotites());
  }

  async function deleteFavorite() {
    await dispatch(deleteFavoriteFilm(id));
    await dispatch(loadListFavotites());
  }

  const listFavoriteFilms = useSelector(getListFavoriteFilms);
  const statusAuth = useSelector(getStatus);

  const getFavoriteById = React.useCallback(() => listFavoriteFilms.find((item) => item.id === (+id)),[listFavoriteFilms, id]);


  if (statusAuth !== AuthorizationStatus.AUTH) {
    return (
      <Link
        to={AppRoute.LOGIN}
        className="btn btn--list film-card__button"
      >
        <span>✛ My list</span>
      </Link>
    );
  }

  if(getFavoriteById()) {
    return (
      <button
        onClick={deleteFavorite}
        className="btn btn--list film-card__button"
        type="button"
      >
        <span>✓ My list</span>
      </button>
    );
  }

  return (
    <button
      onClick={addFavorite}
      className="btn btn--list film-card__button"
      type="button"
    >
      <span>✛ My list</span>
    </button>
  );
}

BtnMyList.propTypes = {
  id: PropTypes.number.isRequired,
};

export default BtnMyList;
