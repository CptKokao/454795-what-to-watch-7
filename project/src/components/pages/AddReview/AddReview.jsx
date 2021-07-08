import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FormReview from '../../../components/common/FormReview/FormReview';
import filmProp from '../../App/film.prop';
import Avatar from '../../common/Header/Avatar';
import Logo from '../../common/Header/Logo';

function AddReview({ films, id }) {
  const film = films[id] ;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>

          <Avatar />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <FormReview />
    </section>
  );
}

AddReview.propTypes = {
  films: PropTypes.arrayOf(
    filmProp,
  ),
  id: PropTypes.string.isRequired,
};

export default AddReview;
