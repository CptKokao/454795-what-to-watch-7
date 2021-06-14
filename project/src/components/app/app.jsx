import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import MyList from '../pages/MyList/MyList';
import Film from '../pages/Film/Film';
import Details from '../pages/Details/Details';
import Review from '../pages/Review/Review';
import AddReview from '../pages/AddReview/AddReview';
import Player from '../pages/Player/Player';
import NotFound from '../pages/NotFound/NotFound';

function App({films, promo}) {

  return (
    <BrowserRouter>
      <Switch>
        {/* / */}
        <Route path={AppRoute.MAIN} exact>
          <Main films={films} promo={promo} />
        </Route>

        {/* /login */}
        <Route path={AppRoute.LOGIN} exact>
          <SignIn />
        </Route>

        {/* /mylist */}
        <Route path={AppRoute.MYLIST} exact>
          <MyList films={films} />
        </Route>

        {/* /films/:id/review */}
        <Route
          path={AppRoute.REVIEW}
          exact
          render={({ match }) => (
            <Review films={films} id={match.params.id}/>
          )}
        />

        {/* /films/:id */}
        <Route
          path={AppRoute.FILMS}
          exact
          render={({ match }) => (
            <Film films={films} id={match.params.id}/>
          )}
        />

        {/* /films/:id/details */}
        <Route
          path={AppRoute.DETAILS}
          exact
          render={({ match }) => (
            <Details films={films} id={match.params.id}/>
          )}
        />

        {/* /films/:id/add-review */}
        <Route
          path={AppRoute.ADDREVIEW}
          exact
          render={({ match }) => (
            <AddReview films={films} id={match.params.id}/>
          )}
        />

        {/* /player/:id */}
        <Route path={AppRoute.PLAYER} exact>
          <Player films={films} />
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
  promo: PropTypes.shape({
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
};

export default App;
