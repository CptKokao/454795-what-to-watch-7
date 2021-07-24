import React from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import { AppRoute, AuthorizationStatus } from '../../../const';
import { logout } from '../../../store/actions/api-user-actions/api-user-actions';
import {getStatus, getUserAvatar, getUserEmail} from '../../../store/reducer/user/selectors';

function Avatar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlerLogout = React.useCallback((e) => {
    e.preventDefault();
    dispatch(logout());
  },[dispatch]);

  const redirect = React.useCallback((e) => {
    e.preventDefault();

    history.push(AppRoute.MYLIST);
  },[history]);

  const authStatus = useSelector(getStatus);
  const avatar = useSelector(getUserAvatar);
  const email = useSelector(getUserEmail);

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
        {authStatus === AuthorizationStatus.AUTH
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

export default Avatar;
// Почему данный компонент не рендерится заново, в то время как Logo рендерится, если не использовать React.memo()
