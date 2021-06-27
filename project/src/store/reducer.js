import {ActionType} from './actions';
import films from '../../src/mocks/films';

const initialState = {
  genres: 'All genres',
s
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
};


export {reducer};
