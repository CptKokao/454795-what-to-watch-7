import React from 'react';
import PropTypes from 'prop-types';

import Overview from '../../common/Overview/Overview';
import Reviews from '../../common/Reviews/Reviews';
import Details from '../../common/Details/Details';
import filmProp from '../../app/film.prop';

function Tabs({ activeFilm, id }) {
  const [ active, setActive ] = React.useState(0);
  const openTab = (e) => setActive(+e.target.dataset.index);

  const items = ['Overview', 'Details', 'Reviews'];
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {items.map((item, index) => (
            <li className={active === index ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} key={item}>
              <span
                className="film-nav__link"
                onClick={openTab}
                data-index={index}
              >{item}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      {active === 0 && <Overview {...activeFilm} />}
      {active === 1 && <Details {...activeFilm} />}
      {active === 2 && <Reviews id={id} />}
    </div>
  );
}

Tabs.propTypes = {
  activeFilm: filmProp,
  id: PropTypes.number.isRequired,
};

export default Tabs;
