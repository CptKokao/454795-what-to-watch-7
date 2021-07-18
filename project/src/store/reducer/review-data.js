import { ActionType } from '../actions';

const initialState = {
  listReviews: [],
  isDataReviewsLoaded: false,
};

const reviewData = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        listReviews: action.payload,
        isDataReviewsLoaded: true,
      };

    default:
      return state;
  }
};

export {reviewData};
