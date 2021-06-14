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

function App({films}) {

  return (
    <BrowserRouter>
      <Switch>
        {/* / */}
        <Route path={AppRoute.MAIN} exact>
          <Main films={films} />
        </Route>

        {/* /login */}
        <Route path={AppRoute.LOGIN} exact>
          <SignIn />
        </Route>

        {/* /mylist */}
        <Route path={AppRoute.MYLIST} exact>
          <MyList films={films} />
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
  films: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.arrayOf(PropTypes.string).isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
    }),
  ),
};

export default App;
