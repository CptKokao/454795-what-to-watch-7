import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import {changeGenre} from '../../../store/actions/actions/actions';
import {getLimitFilms, getGenreFilm} from '../../../store/reducer/film-data/selectors';
import ListCards from '../../common/ListCards/ListCards';
import LoadMore from '../../common/LoadMore/LoadMore';
import filmProp from '../../App/film.prop';

function ListGenres({listFilms}) {
  const dispatch = useDispatch();
  const genre = useSelector(getGenreFilm);
  const limit = useSelector(getLimitFilms);

  // Список уникальных жанров
  const listGenres= [...new Set(listFilms.map((item) => item.genre))];
  // Добавляет в начало массива All genres
  listGenres.unshift('All genres');

  // Список фильмов для выбранного жанра
  const filmsByGenre = genre !== 'All genres' ? listFilms.filter((item) => item.genre === genre) : listFilms;

  function getChangedGenre(e) {
    if (e.target.className === 'catalog__genres-link') {
      dispatch(changeGenre(e.target.innerText));
    }
  }

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
  listFilms: PropTypes.arrayOf(
    filmProp,
  ),
};

export default ListGenres;
