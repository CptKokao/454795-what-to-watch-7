import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {getStatus} from '../../../store/reducer/user/selectors';

function PrivateRoute({render, path, exact, statusAuth}) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        statusAuth === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  statusAuth: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  statusAuth: getStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
