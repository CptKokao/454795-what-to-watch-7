import {ActionType} from './actions';
import films from '../../src/mocks/films';
import promo from '../../src/mocks/promo';

const initialState = {
  genres: 'All genres',
  limit: 8,
  films,
  promo,
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

    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
      };

    default:
      return state;
  }
};


export {reducer};
