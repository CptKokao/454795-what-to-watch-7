import {NameSpace} from '../root-reducer';

export const getListFilms = (state) => state[NameSpace.FILM].listFilms;
export const getIsDataFilmsLoaded = (state) => state[NameSpace.FILM].isDataFilmsLoaded;

export const getActiveFilm = (state) => state[NameSpace.FILM].activeFilm;
export const getIsDataActiveFilmLoaded = (state) => state[NameSpace.FILM].isDataActiveFilmLoaded;

export const getListFavoriteFilms = (state) => state[NameSpace.FILM].listFavoriteFilms;
export const getIsDataFavoriteFilmsLoaded = (state) => state[NameSpace.FILM].isDataFavoriteFilmsLoaded;

export const getListSimilarFilms = (state) => state[NameSpace.FILM].listSimilarFilms;
export const getIsDataSimilarFilmLoaded = (state) => state[NameSpace.FILM].isDataSimilarFilmLoaded;

export const getListPromoFilm = (state) => state[NameSpace.FILM].promoFilm;
export const getIsDataPromoFilmLoaded = (state) => state[NameSpace.FILM].isDataPromoFilmLoaded;

export const getLimitFilms = (state) => state[NameSpace.FILM].limit;
export const getGenreFilm = (state) => state[NameSpace.FILM].genre;
