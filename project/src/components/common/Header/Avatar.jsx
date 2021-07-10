import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import { AppRoute, AuthorizationStatus } from '../../../const';
import { logout } from '../../../store/actions';

function Avatar({avatar, email, status, onLogout}) {

  const handlerLogout = (evt) => {
    evt.preventDefault();
    onLogout();
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src={avatar}
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      </li>
      <li className="user-block__item">
        {status === AuthorizationStatus.AUTH
          ? (
            <>
              <span onClick={handlerLogout} className="user-block__link"><br/>Sign out</span>
              {email && <span>{email}</span>}
            </>
          )
          : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>}
      </li>
    </ul>
  );
}

Avatar.propTypes = {
  status: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  status: state.authorizationStatus,
  avatar: state.avatarImg,
  email: state.email,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});

export {Avatar};
export default connect(mapStateToProps, mapDispatchToProps)(Avatar);


