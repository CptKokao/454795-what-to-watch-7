import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import Player from './Player';

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

describe('Component: Player', () => {

  it('should render correctly', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore({});
    const store = mockStore({
      FILM: {
        activeFilm: FILM,
        isDataActiveFilmLoaded: true,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Player match={{params: {id: 1}}}/>
        </Router>
      </Provider>,
    );

    expect(document.querySelector('video')).toBeInTheDocument();
  });
});
