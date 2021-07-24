import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Details from './Details';

describe('Component: Details', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
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

    const directorElement = getByText('Director');
    const starringElement = getByText('Starring');
    const runTimeElement = getByText('Run Time');
    const genreElement = getByText('Genre');
    const releasedElement = getByText('Released');

    expect(directorElement).toBeInTheDocument();
    expect(starringElement).toBeInTheDocument();
    expect(runTimeElement).toBeInTheDocument();
    expect(genreElement).toBeInTheDocument();
    expect(releasedElement).toBeInTheDocument();
  });
});
