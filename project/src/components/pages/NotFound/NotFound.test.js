import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NotFound from './NotFound';

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <NotFound />
      </Router>,
    );

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go to main page/i)).toBeInTheDocument();
  });
});
