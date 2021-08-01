import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import BtnMyList from './BtnMyList';
import { AuthorizationStatus } from './../../../const';

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

describe('Component: BtnMyList', () => {
  it('should render component for public route, when user not authorized', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore({});
    const store = mockStore({
      FILM: {
        listFavoriteFilms: mockFilms,
        isDataFavoriteFilmsLoaded: true,
      },
      USER: {
        authorizationStatus:AuthorizationStatus.NO_AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <BtnMyList id={2}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/✛ My list/i)).toBeInTheDocument();
  });

  it('should render component for public route, when user authorized and film is not favorite', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore({});
    const store = mockStore({
      FILM: {
        listFavoriteFilms: mockFilms,
        isDataFavoriteFilmsLoaded: true,
      },
      USER: {
        authorizationStatus:AuthorizationStatus.AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <BtnMyList id={0}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/✛ My list/i)).toBeInTheDocument();
  });

  it('should render component for public route, when user authorized and film is favorite', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore({});
    const store = mockStore({
      FILM: {
        listFavoriteFilms: mockFilms,
        isDataFavoriteFilmsLoaded: true,
      },
      USER: {
        authorizationStatus:AuthorizationStatus.AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <BtnMyList id={1}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/✓ My list/i)).toBeInTheDocument();
  });

});
