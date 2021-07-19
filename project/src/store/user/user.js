import { ActionType } from '../actions';
import { AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  avatarImg: 'img/avatar.jpg',
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };

    case ActionType.CHANGE_AVATAR:
      return {
        ...state,
        avatarImg: action.payload,
      };

    case ActionType.CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};

export {user};
