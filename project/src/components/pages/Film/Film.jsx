import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { AuthorizationStatus } from '../../../const';
import {loadActiveFilm, loadSimilarFilms} from '../../../store/api-actions';
import {getActiveFilm, getIsDataActiveFilmLoaded, getListSimilarFilms} from '../../../store/film-data/selectors';
import {getStatus} from '../../../store/user/selectors';
import {AppRoute} from '../../../const';
import ListCards from '../../common/ListCards/ListCards';
import Tabs from '../../common/Tabs/Tabs';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import Loader from '../../common/Loader/Loader';
import BtnMyList from '../../common/BtnMyList/BtnMyList';

function Film({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const activeFilm = useSelector(getActiveFilm);
  const listSimilarFilms = useSelector(getListSimilarFilms);
  const statusAuth = useSelector(getStatus);
  const isDataActiveFilmLoaded = useSelector(getIsDataActiveFilmLoaded);
  const id = +match.params.id;

  React.useEffect(() => {
    dispatch(loadActiveFilm(id))
      .catch(() => history.push(AppRoute.NOTFOUND));

    dispatch(loadSimilarFilms(id));
  }, [dispatch, history, id]);

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
  match: PropTypes.object.isRequired,
};

export default Film;
