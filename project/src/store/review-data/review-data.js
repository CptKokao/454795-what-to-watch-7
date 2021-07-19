import {createReducer} from '@reduxjs/toolkit';
import {getListReviews} from '../api-actions';

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
