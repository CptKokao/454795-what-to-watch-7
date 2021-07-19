import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {loadPromoFilm, loadListFilms} from '../../../store/api-actions';
import {getListPromoFilm, getListFilms, getIsDataPromoFilmLoaded} from '../../../store/film-data/selectors';

import ListGenres from '../../common/ListGenres/ListGenres';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import filmProp from '../../App/film.prop';
import BtnMyList from '../../common/BtnMyList/BtnMyList';
import Loader from '../../common/Loader/Loader';

function Main({ loadFilms, getPromoFilm, promoFilm, listFilms, isDataPromoFilmLoaded }) {

  React.useEffect(() => {
    loadFilms();
    getPromoFilm();
  }, [loadFilms, getPromoFilm]);

  if (!isDataPromoFilmLoaded) {
    return <Loader/>;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <BtnMyList id={promoFilm.id} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ListGenres listFilms={listFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
}

Main.propTypes = {
  listFilms: PropTypes.arrayOf(
    filmProp,
  ),
  promoFilm: filmProp,
  isDataPromoFilmLoaded: PropTypes.bool.isRequired,
  loadFilms: PropTypes.func.isRequired,
  getPromoFilm: PropTypes.func.isRequired,
};

// Без defaultProps в консоли ошибка undefined
Main.defaultProps = {
  isDataPromoFilmLoaded: false,
};

const mapDispatchToProps = (dispatch) => ({
  loadFilms: () => dispatch(loadListFilms()),
  getPromoFilm: () => dispatch(loadPromoFilm()),
});

const mapStateToProps = (state) => ({
  promoFilm: getListPromoFilm(state),
  isDataPromoFilmLoaded: getIsDataPromoFilmLoaded(state),
  listFilms: getListFilms(state),
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);


