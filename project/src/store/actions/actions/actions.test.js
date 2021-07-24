import {
  changeGenre,
  changeLimit,
  changeAvatar,
  requireAuthorization,
  ActionType
} from './actions';

import { AuthorizationStatus } from '../../../const';

describe('Actions', () => {
  // Как здесь проверить, что меняется limit?
  it('action creator for change genre return new genre', () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: 'drama',
    };

    expect(changeGenre('drama')).toEqual(expectedAction);
  });

  // Как здесь проверить, что меняется limit, прям чтобы на 8, не 7?
  it('action creator for change limit return change limit', () => {
    const expectedAction = {
      type: ActionType.CHANGE_LIMIT,
    };

    expect(changeLimit()).toEqual(expectedAction);
  });

  it('action creator for change avatar return change avatar', () => {
    const expectedAction = {
      type: ActionType.CHANGE_AVATAR,
      payload: 'path',
    };

    expect(changeAvatar('path')).toEqual(expectedAction);
  });

  it('action creator for change email return change email', () => {
    const expectedAction = {
      type: ActionType.CHANGE_AVATAR,
      payload: 'email',
    };

    expect(changeAvatar('email')).toEqual(expectedAction);
  });

  // Правильно здесь использовать константу AuthorizationStatus
  // или можно просто строку передать, по аналогии с тестами выше
  it('action creator check authorization return status authorization', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual(expectedAction);
  });
});
