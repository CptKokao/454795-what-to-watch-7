import React from 'react';
import {useDispatch} from 'react-redux';

import { login } from '../../../store/api-user-actions';
import Footer from '../../common/Footer/Footer';
import Logo from '../../common/Header/Logo';

function SignIn() {
  const dispatch = useDispatch();
  const loginRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();

    dispatch(login({
      email: loginRef.current.value,
      password: passwordRef.current.value.trim(),
    }));
  }, [dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          onSubmit={handleSubmit}
          action=""
          className="sign-in__form"
        >
          <div className="sign-in__fields">

            {/* Email */}
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                data-testid="login"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>

            {/* Password */}
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                data-testid="password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>

          </div>

          {/* Submit */}
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
