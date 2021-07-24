import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_FILMS: 'data/loadFilms',
  LOAD_ACTIVE_FILM: 'data/loadFilmId',
  LOAD_PROMO: 'data/loadPromo',
  LOAD_SIMILAR_FILMS: 'data/loadSimilarFilm',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_FAVORITES: 'data/loadFavoriteFilm',

  CHANGE_LIMIT: 'loadMore/changeLimit',
  CHANGE_GENRE: 'listGenres/changeGenre',
  CHANGE_AVATAR: 'user/changeAvatar',
  CHANGE_EMAIL: 'user/changeEmail',

  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => ({
  payload: genre,
}));

export const changeLimit = createAction(ActionType.CHANGE_LIMIT);

export const changeAvatar = createAction(ActionType.CHANGE_AVATAR, (avatar) => ({
  payload: avatar,
}));

export const changeEmail = createAction(ActionType.CHANGE_EMAIL, (email) => ({
  payload: email,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

