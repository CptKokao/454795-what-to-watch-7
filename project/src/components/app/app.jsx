import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import MyList from '../pages/MyList/MyList';
import Film from '../pages/Film/Film';
import AddReview from '../pages/AddReview/AddReview';
import Player from '../pages/Player/Player';
import NotFound from '../pages/NotFound/NotFound';
import Loader from '../common/Loader/Loader';
import PrivateRoute from '../common/PrivateRoute/PrivateRoute';

import { AuthorizationStatus, AppRoute } from '../../const';
import filmProp from './film.prop';

const isCheckedAuth = (status) =>
  status === AuthorizationStatus.UNKNOWN;

function App({films, promo, isDataLoaded, statusAuth}) {
  if (isCheckedAuth(statusAuth) || !isDataLoaded) {
    return <Loader/>;
  }

  return (

    <BrowserRouter>
      <Switch>
        {/* / */}
        <Route path={AppRoute.MAIN} exact>
          <Main films={films} promo={promo} />
        </Route>

        {/* /login */}
        <Route
          path={AppRoute.LOGIN}
          exact
          render={() => (
            AuthorizationStatus.AUTH === statusAuth ? (
              <Redirect to={AppRoute.MAIN} />
            ) : (
              <SignIn/>
            )
          )}
        />

        {/* /mylist */}
        <PrivateRoute
          exact
          path={AppRoute.MYLIST}
          render={() => <MyList films={films} />}
        />

        {/* /films/:id */}
        <Route
          path={AppRoute.FILMS}
          exact
          render={({ match }) => (
            <Film films={films} id={match.params.id}/>
          )}
        />

        {/* /films/:id/add-review */}
        <PrivateRoute
          exact
          path={AppRoute.ADDREVIEW}
          render={({ match }) => <AddReview films={films} id={match.params.id}/>}
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
  films: PropTypes.arrayOf(
    filmProp,
  ),
  promo: filmProp,
  isDataLoaded: PropTypes.bool.isRequired,
  statusAuth: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  promo: state.promo,
  isDataLoaded: state.isDataLoaded,
  statusAuth: state.authorizationStatus,
});

export {App};
export default connect(mapStateToProps)(App);
