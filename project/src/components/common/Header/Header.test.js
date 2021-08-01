import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import Header from './Header';
import { AuthorizationStatus } from './../../../const';

describe('Component: Header', () => {

  it('should render correctly', () => {
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
          <Header/>
        </Router>
      </Provider>,
    );

    expect(document.querySelector('.page-header')).toBeInTheDocument();
  });
})
