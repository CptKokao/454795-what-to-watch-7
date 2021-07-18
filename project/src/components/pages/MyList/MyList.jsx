import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {loadListFavotites} from '../../../store/api-actions';
import ListCards from '../../common/ListCards/ListCards';
import Logo from '../../common/Header/Logo';
import Footer from '../../common/Footer/Footer';
import Avatar from '../../common/Header/Avatar';
import Loader from '../../common/Loader/Loader';
import filmProp from '../../App/film.prop';

function MyList({ getListFavotites, listFavoriteFilms, isFavoriteFilmsLoaded }) {

  React.useEffect(() => {
    getListFavotites();
  }, [getListFavotites]);

  if (!isFavoriteFilmsLoaded) {
    return <Loader/>;
  }


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

          <ListCards listFilms={listFavoriteFilms} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

MyList.propTypes = {
  listFavoriteFilms: PropTypes.arrayOf(
    filmProp,
  ),
  getListFavotites: PropTypes.func.isRequired,
  isFavoriteFilmsLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  listFavoriteFilms: state.listFavoriteFilms,
  isFavoriteFilmsLoaded: state.isFavoriteFilmsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getListFavotites: () => dispatch(loadListFavotites()),
});


export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
