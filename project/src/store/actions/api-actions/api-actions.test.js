import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../services/api';
import {ActionType} from '../actions/actions';
import {
  loadListFilms,
  loadActiveFilm,
  loadSimilarFilms,
  loadListReviews,
  loadListFavotites,
  loadPromoFilm,
  addFavoriteFilm,
  deleteFavoriteFilm,
  addReview
} from './api-actions';
import {APIRoute} from '../const';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct APIs call to GET /films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadListFilmsLoader = loadListFilms();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [{fake: true}]);

    return loadListFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct APIs call to GET /films/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loadActiveFilmLoader = loadActiveFilm(id);

    apiMock
      .onGet(`${APIRoute.FILMS}/${id}`)
      .reply(200, [{fake: true}]);

    return loadActiveFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_ACTIVE_FILM,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct APIs call to GET /films/:id/similar', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loadSimilarFilmsLoader = loadSimilarFilms(id);

    apiMock
      .onGet(`${APIRoute.FILMS}/${id}/similar`)
      .reply(200, [{fake: true}]);

    return loadSimilarFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SIMILAR_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct APIs call to GET /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loadListReviewsLoader = loadListReviews(id);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, [{fake: true}]);

    return loadListReviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct APIs call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadListFavotitesLoader = loadListFavotites();

    apiMock
      .onGet(`${APIRoute.FAVORITE}`)
      .reply(200, [{fake: true}]);

    return loadListFavotitesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct APIs call to GET /promo', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadPromoFilmLoader = loadPromoFilm();

    apiMock
      .onGet(`${APIRoute.PROMO}`)
      .reply(200, [{fake: true}]);

    return loadPromoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct APIs call to POST /favorite/:id/1', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const addFavoriteFilmLoader = addFavoriteFilm(id);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${id}/1`)
      .reply(200, [{fake: true}]);

    return addFavoriteFilmLoader(dispatch, () => {}, api);
  });

  it('should make a correct APIs call to POST /favorite/:id/0', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const deleteFavoriteFilmLoader = deleteFavoriteFilm(id);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${id}/0`)
      .reply(200, [{fake: true}]);

    return deleteFavoriteFilmLoader(dispatch, () => {}, api);
  });

  it('should make a correct APIs call to POST /comments/:id/', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const raiting = 10;
    const comment = 'Something text';
    const id = 1;
    const addReviewLoader = addReview({raiting, comment, id});

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, [{fake: true}]);

    return addReviewLoader(dispatch, () => {}, api);
  });
});
