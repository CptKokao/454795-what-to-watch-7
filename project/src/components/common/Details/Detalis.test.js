import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Details from './Details';

describe('Component: Details', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Details
          director={'Quentin Tarantino'}
          starring={['John Travolta', 'Uma Thurman', 'Samuel L. Jackson']}
          genre={'Crime'}
          runTime={153}
          released={1994}
        />
      </Router>,
    );

    expect(screen.getByText(/Director/i)).toBeInTheDocument();
    expect(screen.getByText(/Starring/i)).toBeInTheDocument();
    expect(screen.getByText(/Run Time/i)).toBeInTheDocument();
    expect(screen.getByText(/Genre/i)).toBeInTheDocument();
    expect(screen.getByText(/Released/i)).toBeInTheDocument();
  });
});
