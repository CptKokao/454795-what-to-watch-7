import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {loadListFilms} from '../../../store/actions';
import filmProp from '../../App/film.prop';

function Player({ match, listFilms, getListFilms  }) {
  const id = +match.params.id;
  const film = listFilms[id - 1] ;

  return (
    <div className="player">
      <video src={film.videoLink} className="player__video" poster={film.backgroundImage} />

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  listFilms: PropTypes.arrayOf(
    filmProp,
  ),
  match: PropTypes.object.isRequired,
  // isDataActiveFilmLoaded: PropTypes.bool.isRequired,
  getListFilms: PropTypes.func.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
  getListFilms: () => dispatch(loadListFilms()),
});

const mapStateToProps = (state) => ({
  listFilms: state.listFilms,
  isDataActiveFilmLoaded: state.isDataActiveFilmLoaded,
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);

