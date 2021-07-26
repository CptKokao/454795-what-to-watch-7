import {NameSpace} from '../root-reducer';

export const getListReviews = (state) => state[NameSpace.REVIEW].listReviews;
export const getIsDataReviewsLoaded = (state) => state[NameSpace.REVIEW].isDataReviewsLoaded;
