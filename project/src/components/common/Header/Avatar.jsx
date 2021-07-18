import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import { AppRoute, AuthorizationStatus } from '../../../const';
import { logout } from '../../../store/actions';

function Avatar({avatar, email, authorizationStatus, onLogout}) {
  const history = useHistory();

  const handlerLogout = React.useCallback((evt) => {
    evt.preventDefault();
    onLogout();
  },[onLogout]);

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src={avatar}
            alt="User avatar"
            width="63"
            height="63"
            onClick={() => history.push(AppRoute.MYLIST)}
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

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  avatar: USER.avatarImg,
  email: USER.email,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout()),
});

export {Avatar};
export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

// Почему данный компонент не рендерится заново, в то время как Logo рендерится, если не использовать React.memo()
