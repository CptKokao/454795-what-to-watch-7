import {APIRoute, AuthorizationStatus} from '../const';

export const ActionType = {
  CHANGE_GENRES: 'ListGenres/changeGenres',
  CHANGE_LIMIT: 'ListGenres/changeLimit',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO: 'data/loadPromo',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  CHANGE_AVATAR: 'user/changeAvatar',
  CHANGE_EMAIL: 'user/changeEmail',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  changeGenres: (genre) => ({
    type: ActionType.CHANGE_GENRES,
    payload: genre,
  }),
  changeLimit: () => ({
    type: ActionType.CHANGE_LIMIT,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromo: (films) => ({
    type: ActionType.LOAD_PROMO,
    payload: films,
  }),
  changeAvatar: (avatar) => ({
    type: ActionType.CHANGE_AVATAR,
    payload: avatar,
  }),
  changeEmail: (email) => ({
    type: ActionType.CHANGE_EMAIL,
    payload: email,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};

// Возвращает список фильмов
export const fetchFilmList  = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
    .catch(() => {})
);

// Возвращает промо фильм
export const fetchPromo  = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromo(data)))
    .catch(() => {})
);

/*
  Login:
    - Записывает token в localStorage
    - Записывает avatar_url в localStorage
    - Записывает email в localStorage
    - Меняет статус
    - Меняет avatar
*/
export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  function onLogIn(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('avatar_url', data.avatar_url);
    localStorage.setItem('email', data.email);
  }

  return (
    api.post(APIRoute.LOGIN, {email, password})
      .then(({data}) => onLogIn(data, dispatch))
      .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
      .then(() => dispatch(ActionCreator.changeAvatar(localStorage.getItem('avatar_url'))))
      .then(() => dispatch(ActionCreator.changeEmail(localStorage.getItem('email'))))
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
    .then(() => dispatch(ActionCreator.logout()))
    .then(() => localStorage.removeItem('token'))
    .then(() => localStorage.removeItem('avatar_url'))
    .then(() => localStorage.removeItem('email'))
    .then(() => dispatch(ActionCreator.changeAvatar('img/avatar.jpg')))
    .catch(() => {})
);

// Обновляет информацию на основе localStorage
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.changeAvatar(localStorage.getItem('avatar_url'))))
    .then(() => dispatch(ActionCreator.changeEmail(localStorage.getItem('email'))))
    .catch(() => {})
);
