import React from 'react';

import Avatar from './Avatar';
import Logo from './Logo';

function Header() {

  return (
    <header className="page-header film-card__head">
      <Logo/>

      <Avatar />
    </header>
  );
}

export default Header;
