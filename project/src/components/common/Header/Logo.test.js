import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import Logo from './Logo';

describe('Component: Logo', () => {

  it('should render correctly', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore({});
    const store = mockStore({});

    render(
      <Provider store={store}>
        <Router history={history}>
          <Logo/>
        </Router>
      </Provider>,
    );

    expect(document.querySelector('.logo__letter--1').textContent).toEqual('W');
    expect(document.querySelector('.logo__letter--2').textContent).toEqual('T');
    expect(document.querySelector('.logo__letter--3').textContent).toEqual('W');

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
