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

const isUserGuest = (status) =>
  status === AuthorizationStatus.UNKNOWN;

function App({ statusAuth }) {
  if (isUserGuest(statusAuth)) {
    return <Loader/>;
  }

  return (

    <BrowserRouter>
      <Switch>
        {/* / */}
        <Route
          path={AppRoute.MAIN}
          exact
          component={Main}
        />

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
          render={() => <MyList />}
        />

        {/* /films/:id */}
        <Route
          path={AppRoute.FILMS}
          exact
          component={Film}
        />

        {/* /films/:id/add-review */}
        <PrivateRoute
          exact
          path={AppRoute.ADDREVIEW}
          render={({ match }) => <AddReview match={match} />}
        />

        {/* /player/:id */}
        <Route
          path={AppRoute.PLAYER}
          exact
          component={Player}
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
  statusAuth: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  statusAuth: state.authorizationStatus,
});

export {App};
export default connect(mapStateToProps)(App);
