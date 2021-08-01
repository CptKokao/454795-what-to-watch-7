import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import Reviews from './Reviews';

const listReviews = [
  {
    id: 1,
    user: {
      id: 19,
      name: 'Christina',
    },
    rating: 8,
    comment: 'Unfortunately we don\'t have a reliable way to tell the true ratings of a movie.',
    date: '2021-07-20T08:50:43.833Z',
  },
  {
    id: 2,
    user: {
      id: 13,
      name: 'Zak',
    },
    rating: 9.7,
    comment: 'It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.',
    date: '2021-07-13T08:50:43.833Z',
  },
];

describe('Component: Reviews', () => {

  it('should render correctly', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore({});
    const store = mockStore({
      REVIEW: {
        listReviews: listReviews,
        isDataReviewsLoaded: true,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Reviews id={1}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(`${listReviews[0].rating}`, 'i')).toBeInTheDocument();
    expect(screen.getByText(`${listReviews[0].comment}`, 'i')).toBeInTheDocument();
    expect(screen.getByText(`${listReviews[0].user.name}`, 'i')).toBeInTheDocument();
  });
});
