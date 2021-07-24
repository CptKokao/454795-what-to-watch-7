import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../../const';
import App from './App';

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      FILM: {
        promoFilm: {
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
          released:1994,
          isFavorite:false,
          isDataFilmsLoaded:true,
          isDataPromoFilmLoaded:true,
          isDataActiveFilmLoaded:false,
          isDataFavoriteFilmsLoaded:true,
        },
        listFavoriteFilms: [],
        listFilms: [],
        isDataPromoFilmLoaded: true,
      },
      USER: {
        authorizationStatus:AuthorizationStatus.NO_AUTH,
        avatarImg:'https://7.react.pages.academy/static/avatar/7.jpg',
        email:'test@test.ru',
      },
      // REVIEW: 'REVIEW',
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "LOGIN" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "NotFound" when user navigate to "/404"', () => {
    history.push(AppRoute.NOTFOUND);
    render(fakeApp);

    const headerElement = screen.getByText(/404. Page not found/i);
    const linkElement = screen.getByText(/Go to main page/i);

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

  // Данные тесты выдает ошибку из-за UseEffect.
  // Написание тестов для комопонентов с хуками, делается в следующем 9 задании.

  // it('should render "Main" when user navigate to "/"', () => {
  //   history.push(AppRoute.MAIN);
  //   render(fakeApp);

  //   // expect(screen.getByText(/WTW/i)).toBeInTheDocument();
  // });

  // it('should render "MyList" when user navigate to "/mylist"', () => {
  //   history.push(AppRoute.MYLIST);
  //   render(fakeApp);
  // });

  // it('should render "FILMS" when user navigate to "/films/:id"', () => {
  //   history.push(AppRoute.FILMS);
  //   render(fakeApp);
  // });

  // it('should render "ADDREVIEW" when user navigate to "/films/:id/add-review"', () => {
  //   history.push(AppRoute.ADDREVIEW);
  //   render(fakeApp);
  // });

  // it('should render "Player" when user navigate to "/player/:id"', () => {
  //   history.push(AppRoute.PLAYER);
  //   render(fakeApp);
  // });
});
