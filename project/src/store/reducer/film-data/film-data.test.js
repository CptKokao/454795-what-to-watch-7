import {filmData} from './film-data';
import {ActionType} from '../../actions/actions/actions';
import { adapterToClient } from './../../../services/adapter';

const mockFilms = [
  {
    'id': 1,
    'name': 'Bronson',
    'poster_image': 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
    'preview_image': 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
    'background_image': 'https://7.react.pages.academy/static/film/background/bronson.jpg',
    'background_color': '#73B39A',
    'video_link': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
    'preview_video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
    'rating': 3.6,
    'scores_count': 109661,
    'director': 'Nicolas Winding Refn',
    'starring': [
      'Tom Hardy',
      'Kelly Adams',
      'Luing Andrews',
    ],
    'run_time': 92,
    'genre': 'Action',
    'released': 2008,
    'is_favorite': false,
  },
  {
    'id': 25,
    'name': 'Bohemian Rhapsody',
    'poster_image': 'https://7.react.pages.academy/static/film/poster/Bohemian_Rhapsody.jpg',
    'preview_image': 'https://7.react.pages.academy/static/film/preview/bohemian_rhapsody.jpg',
    'background_image': 'https://7.react.pages.academy/static/film/background/Bohemian_Rhapsody.jpg',
    'background_color': '#929FA5',
    'video_link': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
    'preview_video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.',
    'rating': 6.1,
    'scores_count': 338903,
    'director': 'Bryan Singer',
    'starring': [
      'Rami Malek',
      'Lucy Boynton',
      'Gwilym Lee',
    ],
    'run_time': 134,
    'genre': 'Drama',
    'released': 2018,
    'is_favorite': false,
  },
];

const mockFilm = {
  'id': 24,
  'name': 'Pulp Fiction',
  'poster_image': 'https://7.react.pages.academy/static/film/poster/Pulp_Fiction.jpg',
  'preview_image': 'https://7.react.pages.academy/static/film/preview/pulp-fiction.jpg',
  'background_image': 'https://7.react.pages.academy/static/film/background/Pulp_Fiction.jpg',
  'background_color': '#795433',
  'video_link': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
  'preview_video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  'description': 'The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
  'rating': 1.5,
  'scores_count': 1635992,
  'director': 'Quentin Tarantino',
  'starring': [
    'John Travolta',
    'Uma Thurman',
    'Samuel L. Jackson',
  ],
  'run_time': 153,
  'genre': 'Crime',
  'released': 1994,
  'is_favorite': false,
};

describe('Reducer: film', () => {
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
        isDataSimilarFilmLoaded: false,
        isDataFavoriteFilmsLoaded: false,
      });
  });

  it('should load list films', () => {
    const state = {listFilms: [], isDataFilmsLoaded: false};

    const loadListFilms = {
      type: ActionType.LOAD_FILMS,
      payload: mockFilms,
    };

    expect(filmData(state, loadListFilms))
      .toEqual({listFilms: mockFilms.map((item) => adapterToClient(item)), isDataFilmsLoaded: true});
  });

  it('should load promo film', () => {
    const state = {promoFilm: {}, isDataPromoFilmLoaded: false};

    const loadPromoFilm = {
      type: ActionType.LOAD_PROMO,
      payload: mockFilm,
    };

    expect(filmData(state, loadPromoFilm))
      .toEqual({promoFilm: adapterToClient(mockFilm), isDataPromoFilmLoaded: true});
  });

  it('should load active film', () => {
    const state = {activeFilm: {}, isDataActiveFilmLoaded: false};

    const loadActiveFilm = {
      type: ActionType.LOAD_ACTIVE_FILM,
      payload: mockFilm,
    };

    expect(filmData(state, loadActiveFilm))
      .toEqual({activeFilm: adapterToClient(mockFilm), isDataActiveFilmLoaded: true});
  });

  it('should load list similar films', () => {
    const state = {listSimilarFilms: [], isDataSimilarFilmLoaded: false};

    const loadSimilarFilms = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: mockFilms,
    };

    expect(filmData(state, loadSimilarFilms))
      .toEqual({listSimilarFilms: mockFilms.map((item) => adapterToClient(item)), isDataSimilarFilmLoaded: true});
  });

  it('should load list favotites films', () => {
    const state = {listFavoriteFilms: [], isDataFavoriteFilmsLoaded: false};

    const loadFavoritesFilms = {
      type: ActionType.LOAD_FAVORITES,
      payload: mockFilms,
    };

    expect(filmData(state, loadFavoritesFilms))
      .toEqual({listFavoriteFilms: mockFilms.map((item) => adapterToClient(item)), isDataFavoriteFilmsLoaded: true});
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

  it('should update isDataActiveFilmLoaded', () => {
    const state = {isDataActiveFilmLoaded: true};

    const resetFilmLoad = {
      type: ActionType.RESET_LOAD_FILM,
    };

    expect(filmData(state, resetFilmLoad))
      .toEqual({isDataActiveFilmLoaded: false});
  });
});
