import {createAction} from '@reduxjs/toolkit';
import {APIRoute, AuthorizationStatus} from '../const';

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

export const changeLimit = createAction(ActionType.CHANGE_LIMIT)

export const changeAvatar = createAction(ActionType.CHANGE_AVATAR, (avatar) => ({
  payload: avatar,
}));

export const changeEmail = createAction(ActionType.CHANGE_EMAIL, (email) => ({
  payload: email,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const exitAuthorization = createAction(ActionType.LOGOUT);


/*
  Login:
    - Записывает token в localStorage
    - Записывает avatar_url в localStorage
    - Записывает email в localStorage
    - Меняет статус
    - Меняет avatar
*/
export const login = ({email, password}) => (dispatch, _getState, api) => {
  function onLogIn(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('avatar_url', data.avatar_url);
    localStorage.setItem('email', data.email);
  }

  return (
    api.post(APIRoute.LOGIN, {email, password})
      .then(({data}) => onLogIn(data, dispatch))
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
      .then(() => dispatch(changeAvatar(localStorage.getItem('avatar_url'))))
      .then(() => dispatch(changeEmail(localStorage.getItem('email'))))
      .catch(() => {})
  );
};

/*
  Logout:
    - Удаляет token в localStorage
    - Удаляет avatar_url в localStorage
    - Удаляет email в localStorage
    - Меняет avatar
    - Меняет статус
*/
export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => dispatch(exitAuthorization()))
    .then(() => localStorage.removeItem('token'))
    .then(() => localStorage.removeItem('avatar_url'))
    .then(() => localStorage.removeItem('email'))
    .then(() => dispatch(changeAvatar('img/avatar.jpg')))
    .catch(() => {})
);

// Обновляет информацию на основе localStorage
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(changeAvatar(localStorage.getItem('avatar_url'))))
    .then(() => dispatch(changeEmail(localStorage.getItem('email'))))
    .catch(() => {})
);
