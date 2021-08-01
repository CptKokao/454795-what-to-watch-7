import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../../const';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;

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

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      FILM: {
        listFilms: FILMS,
        promoFilm: FILM,
        listFavoriteFilms: FILMS,
        activeFilm: FILM,
        listSimilarFilms: [],
        isDataFilmsLoaded: true,
        isDataActiveFilmLoaded: true,
        isDataPromoFilmLoaded: true,
        isDataSimilarFilmLoaded: true,
        isDataFavoriteFilmsLoaded: true,
      },
      USER: {
        authorizationStatus:AuthorizationStatus.AUTH,
        avatarImg:'https://7.react.pages.academy/static/avatar/7.jpg',
        email:'test@test.ru',
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "Main" when user navigates to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText(`${FILM.name}`, 'i')).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it('should render "LOGIN" when user navigate to "/login"', () => {
    const createFakeStore = configureStore({});
    const storeNoAuth = createFakeStore({
      USER: {
        authorizationStatus:AuthorizationStatus.NO_AUTH,
        avatarImg:'',
        email:'',
      },
    });

    const fakeAppNoAuth = (
      <Provider store={storeNoAuth}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    history.push(AppRoute.LOGIN);
    render(fakeAppNoAuth);

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "MYLIST" when user navigate to "/mylist"', () => {
    history.push(AppRoute.MYLIST);
    render(fakeApp);

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it('should render "FILMS" when user navigate to "/films/:id"', () => {
    history.push(AppRoute.FILMS);
    render(fakeApp);

    expect(screen.getByText(`${FILM.name}`, 'i')).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it('should render "ADDREVIEW" when user navigate to "/films/:id/add-review"', () => {
    history.push(AppRoute.ADDREVIEW);
    render(fakeApp);

    expect(screen.getByText(`${FILM.name}`, 'i')).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it('should render "PLAYER" when user navigate to "/player/:id"', () => {
    history.push(AppRoute.PLAYER);
    render(fakeApp);

    expect(screen.getByText(`${FILM.name}`, 'i')).toBeInTheDocument();
  });

  it('should render "NotFound" when user navigate to "/404"', () => {
    history.push(AppRoute.NOTFOUND);
    render(fakeApp);

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to main page/i)).toBeInTheDocument();
  });
});
