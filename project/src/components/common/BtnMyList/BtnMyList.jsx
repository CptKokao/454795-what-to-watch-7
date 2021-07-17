import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';

import {addFavoriteFilm, deleteFavoriteFilm, loadListFavotites} from '../../../store/actions';
import filmProp from '../../App/film.prop';

function BtnMyList({id, addToFavoriteFilm, deleteToFavoriteFilm, listFavoriteFilms, getListFavotites, authorizationStatus}) {

  React.useEffect(() => {
    getListFavotites();
  }, [getListFavotites]);

  // Сейчас работает корректно
  async function addFavorite() {
    await addToFavoriteFilm(id);
    await getListFavotites();
  }

  async function deleteFavorite() {
    await deleteToFavoriteFilm(id);
    await getListFavotites();
  }

  const getFavoriteById = React.useCallback(() => listFavoriteFilms.find((item) => item.id === (+id)),[listFavoriteFilms, id]);

  if (authorizationStatus !== AuthorizationStatus.AUTH) {
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
  listFavoriteFilms: PropTypes.arrayOf(
    filmProp,
  ),
  id: PropTypes.number.isRequired,
  addToFavoriteFilm: PropTypes.func.isRequired,
  deleteToFavoriteFilm: PropTypes.func.isRequired,
  getListFavotites: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addToFavoriteFilm: (id) => dispatch(addFavoriteFilm(id)),
  deleteToFavoriteFilm: (id) => dispatch(deleteFavoriteFilm(id)),
  getListFavotites: () => dispatch(loadListFavotites()),
});

const mapStateToProps = (state) => ({
  listFavoriteFilms: state.listFavoriteFilms,
  authorizationStatus: state.authorizationStatus,
});

export {BtnMyList};
export default connect(mapStateToProps, mapDispatchToProps)(BtnMyList);
