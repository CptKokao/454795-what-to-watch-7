import {createReducer} from '@reduxjs/toolkit';
import {getListFilms, getPromoFilm, getActiveFilm, getSimilarFilms, getListFavotites} from '../../actions/api-actions/api-actions';
import {changeGenre, changeLimit, resetFilmLoad} from '../../actions/actions/actions';
import {adapterToClient} from '../../../services/adapter';

const initialState = {
  genre: 'All genres',
  limit: 8,
  listFilms: [],
  listSimilarFilms: [],
  listFavoriteFilms: [],
  activeFilm: {},
  promoFilm: {},
  isDataFilmsLoaded: false,
  isDataPromoFilmLoaded: false,
  isDataActiveFilmLoaded: false,
  isDataSimilarFilmLoaded: false,
  isDataFavoriteFilmsLoaded: false,
};

const filmData = createReducer(initialState, (builder) => {
  builder

    .addCase(getListFilms, (state, action) => {
      state.listFilms = action.payload.map((item) => adapterToClient(item));
      state.isDataFilmsLoaded = true;
    })

    .addCase(getPromoFilm, (state, action) => {
      state.promoFilm = adapterToClient(action.payload);
      state.isDataPromoFilmLoaded = true;
    })

    .addCase(getActiveFilm, (state, action) => {
      state.activeFilm = adapterToClient(action.payload);
      state.isDataActiveFilmLoaded = true;
    })

    .addCase(getSimilarFilms, (state, action) => {
      state.listSimilarFilms = action.payload.map((item) => adapterToClient(item));
      state.isDataSimilarFilmLoaded = true;
    })

    .addCase(getListFavotites, (state, action) => {
      state.listFavoriteFilms = action.payload.map((item) => adapterToClient(item));
      state.isDataFavoriteFilmsLoaded = true;
    })

    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.limit = 8;
    })

    .addCase(changeLimit, (state) => {
      state.limit = state.limit + 8;
    })

    .addCase(resetFilmLoad, (state) => {
      state.isDataActiveFilmLoaded = false;
    });
});

export {filmData};
