export const ActionType = {
  CHANGE_GENRES: 'ListGenres/changeGenres',
  CHANGE_LIMIT: 'ListGenres/changeLimit',
};

export const ActionCreator = {
  changeGenres: (genre) => ({
    type: ActionType.CHANGE_GENRES,
    payload: genre,
  }),
  changeLimit: () => ({
    type: ActionType.CHANGE_LIMIT,
  }),
};
