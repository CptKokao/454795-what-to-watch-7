import React from 'react';
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
import filmsProp from './films.prop';
import promoProp from './promo.prop';

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
        <Route
          path={AppRoute.PLAYER}
          exact
          render={({ match }) => (
            <Player films={films} id={match.params.id}/>
          )}
        />

        {/* 404 */}
        <Route>
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: filmsProp,
  promo: promoProp,
};

export default App;
