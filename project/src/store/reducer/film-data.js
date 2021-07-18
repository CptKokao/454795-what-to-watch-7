import { ActionType } from '../actions';
import { adapterToClient } from '../../services/adapter';

const initialState = {
  listFilms: [],
  listSimilarFilms: [],
  listFavoriteFilms: [],
  activeFilm: {},
  promoFilm: {},
  isDataFilmsLoaded: false,
  isDataPromoFilmLoaded: false,
  isDataActiveFilmLoaded: false,
  isFavoriteFilmsLoaded: false,
};

const filmData = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_FILMS:
      return {
        ...state,
        listFilms: action.payload.map((item) => adapterToClient(item)),
        isDataFilmsLoaded: true,
      };

    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promoFilm: adapterToClient(action.payload),
        isDataPromoFilmLoaded: true,
      };

    case ActionType.LOAD_ACTIVE_FILM:
      return {
        ...state,
        activeFilm: adapterToClient(action.payload),
        isDataActiveFilmLoaded: true,
      };

    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        listSimilarFilms: action.payload.map((item) => adapterToClient(item)),
      };

    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        listFavoriteFilms: action.payload.map((item) => adapterToClient(item)),
        isFavoriteFilmsLoaded: true,
      };

    case ActionType.CHANGE_GENRES:
      return {
        ...state,
        genres: action.payload,
        limit: 8,
      };

    case ActionType.CHANGE_LIMIT:
      return {
        ...state,
        limit: state.limit + 8,
      };

    default:
      return state;
  }
};

export {filmData};
