import { ActionType } from './actions';
import { adapterToClient } from '../services/adapter';
import { AuthorizationStatus} from '../const';

const initialState = {
  genres: 'All genres',
  limit: 8,
  listFilms: [],
  listSimilarFilms: [],
  listFavoriteFilms: [],
  listReviews: [],
  activeFilm: {},
  promoFilm: {},
  isDataLoaded: false,
  isDataPromoFilmLoaded: false,
  isDataActiveFilmLoaded: false,
  isDataReviewsLoaded: false,
  isFavoriteFilmsLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  avatarImg: 'img/avatar.jpg',
  email: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

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

    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promoFilm: adapterToClient(action.payload),
        isDataPromoFilmLoaded: true,
      };

    case ActionType.LOAD_FILMS:
      return {
        ...state,
        listFilms: action.payload.map((item) => adapterToClient(item)),
        isDataLoaded: true,
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

    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        listReviews: action.payload,
        isDataReviewsLoaded: true,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };

    case ActionType.CHANGE_AVATAR:
      return {
        ...state,
        avatarImg: action.payload,
      };

    case ActionType.CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        listFavoriteFilms: action.payload.map((item) => adapterToClient(item)),
        isFavoriteFilmsLoaded: true,
      };

    default:
      return state;
  }
};


export {reducer};
