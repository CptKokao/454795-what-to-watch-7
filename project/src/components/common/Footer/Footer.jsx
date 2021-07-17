import React from 'react';
import Logo from '../../common/Header/Logo';

function Footer() {
  return (
    <footer className="page-footer">
      <Logo />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
