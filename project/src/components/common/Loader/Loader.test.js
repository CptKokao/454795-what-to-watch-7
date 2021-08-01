import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Loader from './Loader';

describe('Component: Loader', () => {

  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Loader />
      </Router>,
    );

    expect(document.querySelector('.loader')).toBeInTheDocument();
  });

});
