import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import Main from './Main';
import { AuthorizationStatus } from './../../../const';

const FILM = {
  id:1,
  name:'Pulp Fiction',
  posterImage:'https://7.react.pages.academy/static/film/poster/Pulp_Fiction.jpg',
  previewImage:'https://7.react.pages.academy/static/film/preview/pulp-fiction.jpg',
  backgroundImage:'https://7.react.pages.academy/static/film/background/Pulp_Fiction.jpg',
  backgroundColor:'#795433',
  videoLink:'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
  previewVideoLink:'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description:'The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
  rating:1.5,
  scoresCount:1635992,
  director:'Quentin Tarantino',
  runTime:153,
  genre:'Crime',
  starring: ['Tom Hardy', 'Kelly Adams', 'Luing Andrewd'],
  released:1994,
  isFavorite: false,
};

const FILMS = new Array(10).fill(null).map((_, i) => {
  const film = Object.assign({}, FILM);
  film.id = i;
  return film;
});

describe('Component: Main', () => {

  it('should render correctly', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore({});
    const store = mockStore({
      FILM: {
        listFilms: FILMS,
        activeFilm: FILM,
        promoFilm: FILM,
        listSimilarFilms: FILMS,
        listFavoriteFilms: FILMS,
        isDataFilmsLoaded: true,
        isDataActiveFilmLoaded: true,
        isDataSimilarFilmLoaded: true,
        isDataFavoriteFilmsLoaded: true,
        isDataPromoFilmLoaded: true,
      },
      USER: {
        authorizationStatus:AuthorizationStatus.AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Main match={{params: {id: 1}}}/>
        </Router>
      </Provider>,
    );

    expect(document.querySelector('.film-card')).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });
});
