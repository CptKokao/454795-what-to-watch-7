import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import ListCards from '../../common/ListCards/ListCards';

function Details({ films, id }) {

  const film = films[id - 1] ;
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
                <button className="btn btn--list film-card__button" type="button">
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

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <Link to={`/films/${id}`} className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <span className="film-nav__link">Details</span>
                  </li>
                  <li className="film-nav__item">
                    <Link to={`/films/${id}/review`} className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              <div className="film-card__text film-card__row">
                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Director</strong>
                    <span className="film-card__details-value">{film.director}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Starring</strong>
                    <span className="film-card__details-value">
                      {film.starring.join(', ')}
                    </span>
                  </p>
                </div>

                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Run Time</strong>
                    <span className="film-card__details-value">1h 39m</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Genre</strong>
                    <span className="film-card__details-value">{film.genre}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Released</strong>
                    <span className="film-card__details-value">{film.released}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {/* Список карточе с фильмами, первые 4 карточки */}
          <div className="catalog__films-list">
            <ListCards films={films.slice(0,4)} />
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}

Details.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.arrayOf(PropTypes.string).isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
    }).isRequired,
  ),
  id: PropTypes.string.isRequired,
};

export default Details;
