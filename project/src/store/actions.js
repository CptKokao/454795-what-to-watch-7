import {APIRoute, AuthorizationStatus} from '../const';

export const ActionType = {
  CHANGE_GENRES: 'listGenres/changeGenres',
  CHANGE_LIMIT: 'listGenres/changeLimit',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_ACTIVE_FILM: 'data/loadFilmId',
  LOAD_PROMO: 'data/loadPromo',
  LOAD_SIMILAR_FILMS: 'data/loadSimilarFilm',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_FAVORITES: 'data/loadFavoriteFilm',
  CHANGE_AVATAR: 'user/changeAvatar',
  CHANGE_EMAIL: 'user/changeEmail',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
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
  loadListFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadActiveFilm: (film) => ({
    type: ActionType.LOAD_ACTIVE_FILM,
    payload: film,
  }),
  loadSimilarFilms: (films) => ({
    type: ActionType.LOAD_SIMILAR_FILMS,
    payload: films,
  }),
  loadListReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  loadListFavotites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites,
  }),
  loadPromoFilm: (films) => ({
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
export const loadListFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadListFilms(data)))
    .catch(() => {})
);

// Возвращает промо фильм
export const loadPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm(data)))
    .catch(() => {})
);


// Возвращает конкретный фильм по [:id]
export const loadActiveFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadActiveFilm(data)))
);

// Возвращает список похожих фильмов
export const loadSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}/similar`)
    .then(({data}) => dispatch(ActionCreator.loadSimilarFilms(data)))
    .catch(() => {})
);

// Возвращает отзыв фильма по [:id]
export const loadListReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadListReviews(data)))
    .catch(() => {})
);

// Возвращает списиок добавленных фильмов MyList
export const loadListFavotites = () => (dispatch, _getState, api) => (

  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(ActionCreator.loadListFavotites(data)))
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
