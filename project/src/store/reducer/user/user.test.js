import {user} from './user';
import {ActionType} from '../actions';
import {AuthorizationStatus} from '../../../const';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        avatarImg: 'img/avatar.jpg',
        email: '',
      });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.UNKNOWN};

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.UNKNOWN};

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
  });

  it('should update src image for avatar', () => {
    const state = {avatarImg: ''};

    const changeAvatar = {
      type: ActionType.CHANGE_AVATAR,
      payload: 'anyPathToImg',
    };

    expect(user(state, changeAvatar))
      .toEqual({avatarImg: 'anyPathToImg'});
  });

  it('should update email address', () => {
    const state = {email: ''};

    const changeEmail = {
      type: ActionType.CHANGE_EMAIL,
      payload: 'test@test.ru',
    };

    expect(user(state, changeEmail))
      .toEqual({email: 'test@test.ru'});
  });
});
