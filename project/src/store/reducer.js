import { ActionType } from './actions';
import { adapterToClient } from '../store/adapter';

const initialState = {
  genres: 'All genres',
  limit: 8,
  films: [],
  promo: {},
  isDataLoaded: false,
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

    default:
      return state;
  }
};


export {reducer};
