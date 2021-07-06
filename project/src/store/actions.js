import {APIRoute} from '../const';

export const ActionType = {
  CHANGE_GENRES: 'ListGenres/changeGenres',
  CHANGE_LIMIT: 'ListGenres/changeLimit',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO: 'data/loadPromo',
};

export const ActionCreator = {
  changeGenres: (genre) => ({
    type: ActionType.CHANGE_GENRES,
    payload: genre,
  }),
  changeLimit: () => ({
    type: ActionType.CHANGE_LIMIT,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromo: (films) => ({
    type: ActionType.LOAD_PROMO,
    payload: films,
  }),
};

export const fetchFilmList  = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

export const fetchPromo  = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromo(data)))
);
