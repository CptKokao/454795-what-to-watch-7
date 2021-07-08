import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/actions';

import ListCards from '../../common/ListCards/ListCards';
import LoadMore from '../../common/LoadMore/LoadMore';
import filmProp from '../../App/film.prop';

function ListGenres({genres, limit, films, getChangedGenres}) {

  // Список уникальных жанров
  const listGenres= [...new Set(films.map((item) => item.genre))];
  // Добавляет в начало массива All genres
  listGenres.unshift('All genres');

  // Список фильмов для выбранного жанра
  const filmsByGenre = genres !== 'All genres' ? films.filter((item) => item.genre === genres) : films;

  return (
    <>
      <ul className="catalog__genres-list" onClick={getChangedGenres}>
        {listGenres.map((item) => (
          <li
            className={genres === item ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
            key={item}
          >
            <a href="/#" className="catalog__genres-link">{item}</a>
          </li>
        ))}

        <div className="catalog__films-list">
          <ListCards films={filmsByGenre.slice(0, limit)} />
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
  genres: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(
    filmProp,
  ),
  getChangedGenres: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getChangedGenres(e) {
    if (e.target.className === 'catalog__genres-link') {
      dispatch(ActionCreator.changeGenres(e.target.innerText));
    }
  },
});

const mapStateToProps = (state) => ({
  genres: state.genres,
  limit: state.limit,
});

export {ListGenres};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);
