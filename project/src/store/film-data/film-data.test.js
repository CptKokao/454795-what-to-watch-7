import {filmData} from './film-data';
import {ActionType} from '../actions';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmData(undefined, {}))
      .toEqual({
        genre: 'All genres',
        limit: 8,
        listFilms: [],
        listSimilarFilms: [],
        listFavoriteFilms: [],
        activeFilm: {},
        promoFilm: {},
        isDataFilmsLoaded: false,
        isDataPromoFilmLoaded: false,
        isDataActiveFilmLoaded: false,
        isDataFavoriteFilmsLoaded: false,
      });
  });

  it('should update genre', () => {
    const state = {genre: 'All genres'};

    const changeGenre = {
      type: ActionType.CHANGE_GENRE,
      payload: 'Drama',
    };

    expect(filmData(state, changeGenre))
      .toEqual({genre: 'Drama', limit: 8});
  });

  it('should update limit', () => {
    const state = {limit: 8};

    const changeLimit = {
      type: ActionType.CHANGE_LIMIT,
    };

    expect(filmData(state, changeLimit))
      .toEqual({limit: 16});
  });
});
