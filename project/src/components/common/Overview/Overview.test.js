import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Overview from './Overview';

describe('Component: Overview', () => {

  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Overview
          rating={1.5}
          description={'The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'}
          scoresCount={1635992}
          director={'Quentin Tarantino'}
          starring={['Tom Hardy', 'Kelly Adams', 'Luing Andrewd']}

        />
      </Router>,
    );

    expect(screen.getByText(/The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption./i)).toBeInTheDocument();
    expect(screen.getByText(/1635992/i)).toBeInTheDocument();
    expect(screen.getByText(/Quentin Tarantino/i)).toBeInTheDocument();
    expect(screen.getByText(/Tom Hardy/i)).toBeInTheDocument();
    expect(screen.getByText(/Kelly Adams/i)).toBeInTheDocument();
    expect(screen.getByText(/Luing Andrewd/i)).toBeInTheDocument();

  });
});
