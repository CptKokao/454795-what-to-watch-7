import { APIRoute, AuthorizationStatus } from '../../../const';
import { requireAuthorization, changeAvatar, changeEmail } from '../actions/actions';

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
      .then(({data}) => onLogIn(data))
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
export const logout = () => (dispatch, _getState, api) => {
  function onLogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('avatar_url');
    localStorage.removeItem('email');
  }

  return (
    api.delete(APIRoute.LOGOUT)
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
      .then(() => onLogOut())
      .then(() => dispatch(changeAvatar('img/avatar.jpg')))
      .catch(() => {})
  );
};

// Обновляет информацию на основе localStorage
export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(changeAvatar(localStorage.getItem('avatar_url'))))
    .then(() => dispatch(changeEmail(localStorage.getItem('email'))))
    .catch(() => {})
);
