import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/actions';

import ListCards from '../../common/ListCards/ListCards';
import filmProp from '../../App/film.prop';

function ListGenres({genres, films, getChangedGenres}) {
  // Список уникальных жанров
  const listGenres= [...new Set(films.map((item) => item.genre))];
  // Добавляет в начало массива All genres
  listGenres.unshift('All genres');

  // Возвращает список фильмов для выбранного жанра
  const getGenreFilms = React.useCallback(() => {
    if (genres !== 'All genres') {
      return films.filter((item) => item.genre === genres);
    }
    return films;
  }, [films, genres]);

  return (
    <ul className="catalog__genres-list" onClick={getChangedGenres}>
      {listGenres.map((item) => (
        <li
          className={genres === item ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
          key={item}
        >
          <a href="/#" className="catalog__genres-link">{item}</a>
        </li>
      ))}
      <ListCards films={getGenreFilms()} />
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getChangedGenres(e) {
    if (e.target.className === 'catalog__genres-link') {
      dispatch(ActionCreator.changeGenres(e.target.innerText));
    }
  },
});

const mapStateToProps = (state) => ({
  genres: state.genres,
  films: state.films,
});

ListGenres.propTypes = {
  genres: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
    filmProp,
  ),
  getChangedGenres: PropTypes.func.isRequired,
};

export {ListGenres};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);
