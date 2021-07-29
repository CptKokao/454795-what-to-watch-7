import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../services/api';
import {ActionType} from '../actions/actions';
import {checkAuth, login, logout} from '../api-user-actions/api-user-actions';
// import {loadListFilms} from '../api-actions/api-actions';
import {APIRoute, AuthorizationStatus} from '../../../const';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  // Тест не покрывает changeAvatar, changeEmail, там нужно ображение к localStorage
  // это выполняется в следующем 9 задании
  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    Storage.prototype.getItem = jest.fn();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_AVATAR,
          payload: Storage.prototype.getItem('avatar_url'),
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.CHANGE_EMAIL,
          payload: Storage.prototype.getItem('email'),
        });
      });

  });

  // Тест не покрывает changeAvatar, changeEmail, там нужно ображение к localStorage
  // это выполняется в следующем 9 задании
  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    Storage.prototype.getItem = jest.fn();
    Storage.prototype.setItem = jest.fn();

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_AVATAR,
          payload: Storage.prototype.getItem(),
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.CHANGE_EMAIL,
          payload: Storage.prototype.getItem(),
        });

        expect(Storage.prototype.setItem).toBeCalledTimes(3);
        expect(Storage.prototype.setItem).toHaveBeenCalled();
        expect(Storage.prototype.setItem).toHaveBeenCalled();
        expect(Storage.prototype.setItem).toHaveBeenCalled();
      });
  });

  // Тест не покрывает удаление данных из localStorage
  // это выполняется в следующем 9 задании
  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204, [{fake: true}]);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_AVATAR,
          payload: 'img/avatar.jpg',
        });

        expect(Storage.prototype.removeItem).toBeCalledTimes(3);
        expect(Storage.prototype.removeItem).toHaveBeenCalled();
        expect(Storage.prototype.removeItem).toHaveBeenCalled();
        expect(Storage.prototype.removeItem).toHaveBeenCalled();
      });
  });
});
