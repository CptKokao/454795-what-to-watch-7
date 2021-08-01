import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {loadActiveFilm} from '../../../store/actions/api-actions/api-actions';
import {getActiveFilm, getIsDataActiveFilmLoaded} from '../../../store/reducer/film-data/selectors';

import {AppRoute} from '../../../const';
import FormReview from '../../../components/common/FormReview/FormReview';
import Avatar from '../../common/Header/Avatar';
import Logo from '../../common/Header/Logo';
import Loader from '../../common/Loader/Loader';

function AddReview({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const activeFilm = useSelector(getActiveFilm);
  const isDataActiveFilmLoaded = useSelector(getIsDataActiveFilmLoaded);
  const id = +match.params.id;

  React.useEffect(() => {

    // Если ранее фильм был загружен, то объект должен быть не пустой,
    // тогда запрос к сереверу отправлять не нужно, иначе запросить фильм
    if(Object.keys(activeFilm).length === 0) {
      dispatch(loadActiveFilm(id));
    }
  }, [dispatch, activeFilm, history, id]);

  if (!isDataActiveFilmLoaded) {
    return <Loader/>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={activeFilm.backgroundImage} alt={activeFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/`} className="breadcrumbs__link">{activeFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>

          <Avatar />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={activeFilm.posterImage} alt={activeFilm.name} width="218" height="327" />
        </div>
      </div>

      <FormReview id={id} />
    </section>
  );
}

AddReview.propTypes = {
  match: PropTypes.object.isRequired,
};

export default AddReview;
