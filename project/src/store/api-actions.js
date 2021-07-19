import { APIRoute } from '../const';
import { ActionType } from '../store/actions';

export const getListFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const getActiveFilm = (film) => ({
  type: ActionType.LOAD_ACTIVE_FILM,
  payload: film,
});

export const getSimilarFilms = (films) => ({
  type: ActionType.LOAD_SIMILAR_FILMS,
  payload: films,
});

export const getListReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const getListFavotites = (favorites) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: favorites,
});

export const getPromoFilm = (films) => ({
  type: ActionType.LOAD_PROMO,
  payload: films,
});

// Возвращает список фильмов
export const loadListFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(getListFilms(data)))
    .catch(() => {})
);

// Возвращает промо фильм
export const loadPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(getPromoFilm(data)))
    .catch(() => {})
);

// Возвращает конкретный фильм по [:id]
export const loadActiveFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(getActiveFilm(data)))
);

// Возвращает список похожих фильмов
export const loadSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}/similar`)
    .then(({data}) => dispatch(getSimilarFilms(data)))
    .catch(() => {})
);

// Возвращает отзыв фильма по [:id]
export const loadListReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(getListReviews(data)))
    .catch(() => {})
);

// Возвращает списиок добавленных фильмов MyList
export const loadListFavotites = () => (dispatch, _getState, api) => (

  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(getListFavotites(data)))
    .catch(() => {})
);

// Добавляет фильм в MyList
export const addFavoriteFilm = (id) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/1`)
    .catch(() => {})
);

// Удаляет фильм из MyList
export const deleteFavoriteFilm = (id) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/0`)
    .catch(() => {})
);

// Отправляет отзыв
export const addReview = ({rating, comment, id}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
);
