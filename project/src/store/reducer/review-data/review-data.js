import {createReducer} from '@reduxjs/toolkit';
import {getListReviews} from '../../actions/api-actions/api-actions';

const initialState = {
  listReviews: [],
  isDataReviewsLoaded: false,
};

const reviewData = createReducer(initialState, (builder) => {
  builder

    .addCase(getListReviews, (state, action) => {
      state.listReviews = action.payload;
      state.isDataReviewsLoaded = true;
    });
});

export {reviewData};
