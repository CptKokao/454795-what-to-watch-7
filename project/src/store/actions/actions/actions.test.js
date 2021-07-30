import {
  changeGenre,
  changeLimit,
  changeAvatar,
  requireAuthorization,
  ActionType
} from './actions';

import { AuthorizationStatus } from '../../../const';

describe('Actions', () => {
  it('action creator for change genre return new genre', () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: 'drama',
    };

    expect(changeGenre('drama')).toEqual(expectedAction);
  });

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

  it('action creator check authorization return status authorization', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual(expectedAction);
  });
});
