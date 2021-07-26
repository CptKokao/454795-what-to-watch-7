import {combineReducers} from 'redux';
import {filmData} from './film-data/film-data';
import {reviewData} from './review-data/review-data';
import {user} from './user/user';

export const NameSpace = {
  FILM: 'FILM',
  REVIEW: 'REVIEW',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.FILM]: filmData,
  [NameSpace.REVIEW]: reviewData,
  [NameSpace.USER]: user,
});
