import {createAction} from '@reduxjs/toolkit';
import { APIRoute } from '../../../const';
import { ActionType } from '../actions/actions';

export const getListFilms = createAction(ActionType.LOAD_FILMS, (films) => ({
  payload: films,
}));

export const getActiveFilm = createAction(ActionType.LOAD_ACTIVE_FILM, (film) => ({
  payload: film,
}));

export const getSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, (films) => ({
  payload: films,
}));

export const getListReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const getListFavotites = createAction(ActionType.LOAD_FAVORITES, (favorites) => ({
  payload: favorites,
}));

export const getPromoFilm = createAction(ActionType.LOAD_PROMO, (films) => ({
  payload: films,
}));

// Возвращает список фильмов
export const loadListFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(getListFilms(data)))
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

// Возвращает промо фильм
export const loadPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(getPromoFilm(data)))
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
