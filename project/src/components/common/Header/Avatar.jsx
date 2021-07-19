import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import { AppRoute, AuthorizationStatus } from '../../../const';
import { logout } from '../../../store/actions';
import {getStatus, getUserAvatar, getUserEmail} from '../../../store/user/selectors';

function Avatar({avatar, email, authorizationStatus, onLogout}) {
  const history = useHistory();

  const handlerLogout = React.useCallback((e) => {
    e.preventDefault();
    onLogout();
  },[onLogout]);

  const redirect = React.useCallback((e) => {
    e.preventDefault();

    history.push(AppRoute.MYLIST);
  },[history]);

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src={avatar}
            alt="User avatar"
            width="63"
            height="63"
            onClick={redirect}
          />
        </div>
      </li>
      <li className="user-block__item">
        {authorizationStatus === AuthorizationStatus.AUTH
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
  authorizationStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getStatus(state),
  avatar: getUserAvatar(state),
  email: getUserEmail(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout()),
});

export {Avatar};
export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

// Почему данный компонент не рендерится заново, в то время как Logo рендерится, если не использовать React.memo()
