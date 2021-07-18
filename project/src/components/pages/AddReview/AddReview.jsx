import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {loadActiveFilm} from '../../../store/api-actions';
import {AppRoute} from '../../../const';
import FormReview from '../../../components/common/FormReview/FormReview';
import filmProp from '../../App/film.prop';
import Avatar from '../../common/Header/Avatar';
import Logo from '../../common/Header/Logo';
import Loader from '../../common/Loader/Loader';

function AddReview({ match, getActivetFilm, activeFilm, isDataActiveFilmLoaded}) {
  const history = useHistory();
  const id = +match.params.id;

  React.useEffect(() => {

    // Если ранее фильм был загружен, то объект должен быть не пустой,
    // тогда запрос к сереверу отправлять не нужно, иначе запросить фильм
    if(Object.keys(activeFilm).length === 0) {
      getActivetFilm(id)
        .catch(() => history.push(AppRoute.NOTFOUND));
    }
  }, [activeFilm, getActivetFilm, history, id]);

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
  activeFilm: filmProp,
  match: PropTypes.object.isRequired,
  getActivetFilm: PropTypes.func.isRequired,
  isDataActiveFilmLoaded: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getActivetFilm: (id) => dispatch(loadActiveFilm(id)),
});

const mapStateToProps = ({FILM}) => ({
  activeFilm: FILM.activeFilm,
  isDataActiveFilmLoaded: FILM.isDataActiveFilmLoaded,
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
