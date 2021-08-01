import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import Avatar from './Avatar';
import { AuthorizationStatus } from './../../../const';

describe('Component: Avatar', () => {

  it('should render correctly if user AUTH', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore({});
    const store = mockStore({
      USER: {
        authorizationStatus:AuthorizationStatus.AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Avatar/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render correctly if user NO_AUTH', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore({});
    const store = mockStore({
      USER: {
        authorizationStatus:AuthorizationStatus.NO_AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Avatar/>
        </Router>
      </Provider>,
    );
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
