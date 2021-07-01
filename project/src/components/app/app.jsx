import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../pages/Main/Main';
import SignIn from '../pages/SignIn/SignIn';
import MyList from '../pages/MyList/MyList';
import Film from '../pages/Film/Film';
import AddReview from '../pages/AddReview/AddReview';
import Player from '../pages/Player/Player';
import NotFound from '../pages/NotFound/NotFound';

import filmProp from './film.prop';
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

        {/* /films/:id */}
        <Route
          path={AppRoute.FILMS}
          exact
          render={({ match }) => (
            <Film films={films} id={match.params.id}/>
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

const mapStateToProps = (state) => ({
  films: state.films,
  promo: state.promo,
});

App.propTypes = {
  films: PropTypes.arrayOf(
    filmProp,
  ),
  promo: promoProp,
};

export {App};
export default connect(mapStateToProps)(App);
