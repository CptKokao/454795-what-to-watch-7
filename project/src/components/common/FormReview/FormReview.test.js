import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import FormReview from './FormReview';

describe('Component: FormReview', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore({});
    const store = mockStore({});
    const mockSubmit = jest.fn();

    const {container } = render(
      <Provider store={store}>
        <Router history={history}>
          <FormReview id={1}/>
        </Router>
      </Provider>,
    );

    expect(container.querySelector('.add-review__form')).toBeInTheDocument();
    expect(screen.getByRole('button').hasAttribute('disabled')).toBe(true);
    userEvent.click(screen.getByRole('button'));
    expect(mockSubmit).not.toHaveBeenCalled();

    fireEvent(container.querySelector('.add-review__form'), new Event('submit'));

  });
});
