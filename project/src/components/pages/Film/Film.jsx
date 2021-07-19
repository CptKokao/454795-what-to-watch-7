import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { AuthorizationStatus } from '../../../const';
import {useHistory} from 'react-router-dom';

import {loadActiveFilm, loadSimilarFilms, addFavoriteFilm, deleteFavoriteFilm, loadListFavotites} from '../../../store/api-actions';
import {getActiveFilm, getIsDataActiveFilmLoaded, getListSimilarFilms, getListFavoriteFilms} from '../../../store/film-data/selectors';
import {getStatus} from '../../../store/user/selectors';

import {AppRoute} from '../../../const';
import ListCards from '../../common/ListCards/ListCards';
import Tabs from '../../common/Tabs/Tabs';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import Loader from '../../common/Loader/Loader';
import BtnMyList from '../../common/BtnMyList/BtnMyList';
import filmProp from '../../App/film.prop';

function Film({ match, getActivetFilm, activeFilm, getSimilarFilms, listSimilarFilms, statusAuth, isDataActiveFilmLoaded }) {
  const history = useHistory();
  const id = +match.params.id;

  React.useEffect(() => {
    getActivetFilm(id)
      .catch(() => history.push(AppRoute.NOTFOUND));

    getSimilarFilms(id);
  }, [getActivetFilm, getSimilarFilms, history, id]);

  if (!isDataActiveFilmLoaded) {
    return <Loader/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={activeFilm.backgroundImage} alt={activeFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{activeFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{activeFilm.genre}</span>
                <span className="film-card__year">{activeFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <BtnMyList id={id} />

                {statusAuth === AuthorizationStatus.AUTH && (
                  <Link to={`/films/${id}/add-review`} className="btn film-card__button">Add review</Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={activeFilm.posterImage} alt={activeFilm.name} width="218" height="327" />
            </div>

            <Tabs id={id} activeFilm={activeFilm} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {/* Список похожих карточек с фильмами, не больше 4 */}
          {listSimilarFilms && <ListCards listFilms={listSimilarFilms} />}

        </section>

        <Footer />
      </div>
    </>
  );
}

Film.propTypes = {
  activeFilm: filmProp,
  listSimilarFilms: PropTypes.arrayOf(
    filmProp,
  ),
  match: PropTypes.object.isRequired,
  statusAuth: PropTypes.string.isRequired,
  isDataActiveFilmLoaded: PropTypes.bool.isRequired,
  getActivetFilm: PropTypes.func.isRequired,
  getSimilarFilms: PropTypes.func.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
  getActivetFilm: (id) => dispatch(loadActiveFilm(id)),
  getSimilarFilms: (id) => dispatch(loadSimilarFilms(id)),
  addToFavoriteFilm: (id) => dispatch(addFavoriteFilm(id)),
  deleteToFavoriteFilm: (id) => dispatch(deleteFavoriteFilm(id)),
  getListFavotites: () => dispatch(loadListFavotites()),
});

const mapStateToProps = (state) => ({
  activeFilm: getActiveFilm(state),
  listSimilarFilms: getListSimilarFilms(state),
  statusAuth: getStatus(state),
  listFavoriteFilms: getListFavoriteFilms(state),
  isDataActiveFilmLoaded: getIsDataActiveFilmLoaded(state),
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
