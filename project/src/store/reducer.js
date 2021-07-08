import { ActionType } from './actions';
import { adapterToClient } from '../services/adapter';
import { AuthorizationStatus} from '../const';

const initialState = {
  genres: 'All genres',
  limit: 8,
  films: [],
  promo: {},
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  avatarImg: 'img/avatar.jpg',
  email: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_GENRES:
      return {
        ...state,
        genres: action.payload,
        limit: 8,
      };

    case ActionType.CHANGE_LIMIT:
      return {
        ...state,
        limit: state.limit + 8,
      };

    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promo: adapterToClient(action.payload),
      };

    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload.map((item) => adapterToClient(item)),
        isDataLoaded: true,
      };

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


export {reducer};
