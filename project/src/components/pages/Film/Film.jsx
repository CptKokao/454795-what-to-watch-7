import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import ListCards from '../../common/ListCards/ListCards';
import Tabs from '../../common/Tabs/Tabs';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import filmProp from '../../App/film.prop';
import { AppRoute } from '../../../const';

function Film({ films, id }) {
  const history = useHistory();

  const film = films[id];

  // Ищет похожие фильмы
  const getSimilarFilms = React.useCallback(() => {
    const similarFilms = films.filter((item) => {

      // Если эта не текущая картчока, добавить в массив, иначе не добовлять
      if (item.name !== film.name) {
        return item.genre === film.genre;
      }
      return false;
    });

    // Если карточек больше 4, отобразить первые 4 карточек
    if (similarFilms.lenght > 4) {
      return similarFilms.slice(0,4);
    }

    return similarFilms;
  }, [film.genre, film.name, films]);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>


                <button
                  onClick={() => history.push(AppRoute.MYLIST)}
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>


                <Link to={`/films/${id}/add-review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <Tabs film={film} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {/* Список похожих карточек с фильмами, не больше 4 */}
          <ListCards films={getSimilarFilms()} />
        </section>

        <Footer />
      </div>
    </>
  );
}

Film.propTypes = {
  films: PropTypes.arrayOf(
    filmProp,
  ),
  id: PropTypes.string.isRequired,
};

export default Film;
