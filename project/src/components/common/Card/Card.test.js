import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import Card from './Card';

describe('Component: Card', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore({});
    const store = mockStore({});

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Card
            name={'Bohemian Rhapsody'}
            id={25}
            previewVideoLink={'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'}
            posterImage={'https://7.react.pages.academy/static/film/poster/Bohemian_Rhapsody.jpg'}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(container.querySelector('video')).toBeInTheDocument();
    expect(container.querySelector('video')).toHaveAttribute('poster', expect.stringContaining('Bohemian_Rhapsody.jpg'));
    expect(container.querySelector('video')).toHaveAttribute('src', expect.stringContaining('Big_Buck_Bunny_Trailer_400p.ogv'));
  });
});
