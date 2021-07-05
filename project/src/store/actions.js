export const ActionType = {
  CHANGE_GENRES: 'ListGenres/changeGenres',
  CHANGE_LIMIT: 'ListGenres/changeLimit',
  LOAD_FILMS: 'data/loadFilms',
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
};
