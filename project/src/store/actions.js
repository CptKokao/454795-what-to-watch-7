export const ActionType = {
  CHANGE_GENRES: '/changeGenres',
};

export const ActionCreator = {
  changeGenres: (genre) => ({
    type: ActionType.CHANGE_GENRES,
    payload: genre,
  }),
};
