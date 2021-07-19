import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {changeGenre} from '../../../store/actions';
import {getLimitFilms, getGenreFilm} from '../../../store/film-data/selectors';

import ListCards from '../../common/ListCards/ListCards';
import LoadMore from '../../common/LoadMore/LoadMore';
import filmProp from '../../App/film.prop';

function ListGenres({genre, limit, listFilms, getChangedGenre}) {

  // Список уникальных жанров
  const listGenres= [...new Set(listFilms.map((item) => item.genre))];
  // Добавляет в начало массива All genres
  listGenres.unshift('All genres');

  // Список фильмов для выбранного жанра
  const filmsByGenre = genre !== 'All genres' ? listFilms.filter((item) => item.genre === genre) : listFilms;

  return (
    <>
      <ul className="catalog__genres-list" onClick={getChangedGenre}>
        {listGenres.map((item) => (
          <li
            className={genre === item ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
            key={item}
          >
            <a href="/#" className="catalog__genres-link">{item}</a>
          </li>
        ))}

        <div className="catalog__films-list">
          <ListCards listFilms={filmsByGenre.slice(0, limit)} />
        </div>
      </ul>

      {/* Если длина массива с фильмами больше или равно лимиту, то еще есть не показанные фильмы в массиве */}
      {limit <= filmsByGenre.length && (
        <LoadMore />
      )}
    </>
  );
}

ListGenres.propTypes = {
  genre: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  listFilms: PropTypes.arrayOf(
    filmProp,
  ),
  getChangedGenre: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getChangedGenre(e) {
    if (e.target.className === 'catalog__genres-link') {
      dispatch(changeGenre(e.target.innerText));
    }
  },
});

const mapStateToProps = (state) => ({
  genre: getGenreFilm(state),
  limit: getLimitFilms(state),
});

export {ListGenres};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);
