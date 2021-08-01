import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import LoadMore from './LoadMore';

describe('Component: LoadMore', () => {

  it('should render correctly', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore({});
    const store = mockStore({
      Film: {
        limit:8,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <LoadMore />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();

  });
});
