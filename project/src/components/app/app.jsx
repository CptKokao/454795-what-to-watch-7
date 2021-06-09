import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../Main/Main';
import SignIn from '../SignIn/SignIn';
import MyList from '../MyList/MyList';
import Film from '../Film/Film';
import Review from '../Review/Review';
import Player from '../Player/Player';
import NotFound from '../NotFound/NotFound';

function App({film, cards}) {

  return (
    <BrowserRouter>
      <Switch>
        {/* / */}
        <Route path={AppRoute.MAIN} exact>
          <Main film={film} cards={cards} />
        </Route>

        {/* /login */}
        <Route path={AppRoute.LOGIN} exact>
          <SignIn />
        </Route>

        {/* /mylist */}
        <Route path={AppRoute.MYLIST} exact>
          <MyList />
        </Route>

        {/* /films/:id */}
        <Route path={AppRoute.FILMS} exact>
          <Film />
        </Route>

        {/* /films/:id/review */}
        <Route path={AppRoute.REVIEW} exact>
          <Review />
        </Route>

        {/* /player/:id */}
        <Route path={AppRoute.PLAYER} exact>
          <Player />
        </Route>

        {/* 404 */}
        <Route>
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
