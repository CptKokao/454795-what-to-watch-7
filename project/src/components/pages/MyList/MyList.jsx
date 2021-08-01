import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {loadListFavotites} from '../../../store/actions/api-actions/api-actions';
import {getListFavoriteFilms, getIsDataFavoriteFilmsLoaded} from '../../../store/reducer/film-data/selectors';
import ListCards from '../../common/ListCards/ListCards';
import Logo from '../../common/Header/Logo';
import Footer from '../../common/Footer/Footer';
import Avatar from '../../common/Header/Avatar';
import Loader from '../../common/Loader/Loader';

function MyList() {
  const dispatch = useDispatch();

  const listFavoriteFilms = useSelector(getListFavoriteFilms);
  const isFavoriteFilmsLoaded = useSelector(getIsDataFavoriteFilmsLoaded);

  React.useEffect(() => {
    if(!isFavoriteFilmsLoaded) {
      dispatch(loadListFavotites());
    }
  }, [dispatch, isFavoriteFilmsLoaded]);

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

export default MyList;
