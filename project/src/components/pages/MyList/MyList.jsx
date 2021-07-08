import React from 'react';
import PropTypes from 'prop-types';

import ListCards from '../../common/ListCards/ListCards';
import Logo from '../../common/Header/Logo';
import Footer from '../../common/Footer/Footer';
import Avatar from '../../common/Header/Avatar';
import filmProp from '../../App/film.prop';

function MyList({ films }) {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo />
        <h1 className="page-title user-page__title">My list</h1>

        <Avatar />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">

          <ListCards films={films} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

MyList.propTypes = {
  films: PropTypes.arrayOf(
    filmProp,
  ),
};

export default MyList;
