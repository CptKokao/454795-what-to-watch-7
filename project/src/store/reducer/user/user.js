import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, changeAvatar, changeEmail} from '../../actions/actions/actions';
import { AuthorizationStatus} from '../../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  avatarImg: 'img/avatar.jpg',
  email: '',
};

const user = createReducer(initialState, (builder) => {
  builder

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(changeAvatar, (state, action) => {
      state.avatarImg = action.payload;
    })

    .addCase(changeEmail, (state, action) => {
      state.email = action.payload;
    });
});

export {user};
