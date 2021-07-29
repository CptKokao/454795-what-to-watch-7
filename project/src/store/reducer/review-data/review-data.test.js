import {reviewData} from './review-data';
import {ActionType} from '../../actions/actions/actions';

const reviews = [
  {
    id: 1,
    user: {
      id: 19,
      name: 'Christina',
    },
    rating: 8,
    comment: 'Unfortunately we don\'t have a reliable way to tell the true ratings of a movie.',
    date: '2021-07-20T08:50:43.833Z',
  },
  {
    id: 2,
    user: {
      id: 13,
      name: 'Zak',
    },
    rating: 9.7,
    comment: 'It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.',
    date: '2021-07-13T08:50:43.833Z',
  },
];

describe('Reducer: reviews', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewData(undefined, {}))
      .toEqual({
        listReviews: [],
        isDataReviewsLoaded: false,
      });
  });

  it('should load list reviews', () => {
    const state = {listReviews: [], isDataReviewsLoaded: false};

    const loadListReviews = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(reviewData(state, loadListReviews))
      .toEqual({listReviews: reviews, isDataReviewsLoaded: true});
  });

});
