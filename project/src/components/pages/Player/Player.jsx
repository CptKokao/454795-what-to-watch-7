import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {AppRoute} from '../../../const';
import {getIsDataActiveFilmLoaded, getActiveFilm} from '../../../store/film-data/selectors';
import {loadActiveFilm} from '../../../store/api-actions';
import Loader from '../../common/Loader/Loader';

function Player({match}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const videoElement = React.useRef(null);

  // Состояние нажатие на кнопку Play
  const [isPlay, setPlay] = React.useState(false);

  // Состояние длительности фильма, береться из videoElement.current.duration
  const [duration, setDuration] = React.useState(null);

  // Состояние просмотренного времени, береться из videoElement.current.currentTime
  const [currentTime, setCurrentTime] = React.useState(0);

  // Необходим очищение setTimeout
  const [interval, saveInterval] =  React.useState(null);

  // Событие по нажатию на кнопку Play
  const onPlay = React.useCallback(() => {
    setPlay(true);
    videoElement.current.play();

    saveInterval(setInterval(() => {
      if (videoElement.current) {
        if (videoElement.current.duration) {
          setDuration(videoElement.current.duration);
        }
        setCurrentTime(videoElement.current.currentTime);
      }
    }, 1000));
  }, []);

  // Событие по нажатию на кнопку Pause
  const onPause = React.useCallback(() => {
    setPlay(false);
    if (videoElement.current) {
      videoElement.current.pause();
    }
    clearInterval(interval);
  }, [interval]);

  // Событие по нажатию на кнопку Fullscreen
  const onFullscreen = React.useCallback(() => {
    if (videoElement.current) {
      videoElement.current.requestFullscreen();
    }
  },[]);

  // Преобразует время в нужный формат
  const getTime = React.useCallback((time) => {
    let hours = null;
    let minunes = null;
    let seconds = null;

    if(time >= 3600) {
      hours = parseInt(time / 3600, 10);
      minunes = parseInt((time % 3600) / 60, 10);
      seconds = parseInt(time % 60, 10);

      if(!seconds) {
        seconds = '00';
      }

      return (
        `${hours}:${minunes}:${seconds}`
      );
    }

    minunes = parseInt(time / 60, 10);
    seconds = parseInt(time % 60, 10);

    if(!seconds) {
      seconds = '00';
    }

    return (
      `${minunes}:${seconds}`
    );
  },[]);

  const film = useSelector(getActiveFilm);
  const isDataActiveFilmLoaded = useSelector(getIsDataActiveFilmLoaded);
  const id = +match.params.id;

  React.useEffect(() => {
    dispatch(loadActiveFilm(id))
      .catch(() => history.push(AppRoute.NOTFOUND));
  }, [dispatch, history, id]);

  if (!isDataActiveFilmLoaded) {
    return <Loader/>;
  }

  return (
    <div className="player">
      <video
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        ref={videoElement}
      />

      <button
        type="button"
        className="player__exit"
        onClick={() => history.goBack()}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100"></progress>
            <div className="player__toggler" style={{left: `${currentTime / duration * 100}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{currentTime ? `- ${getTime(duration - currentTime)}` : getTime(film.runTime * 60)}</div>

        </div>

        <div className="player__controls-row">
          {isPlay
            ? (
              <button
                type="button"
                className="player__play"
                onClick={onPause}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>

              </button>
            ) : (
              <button
                type="button"
                className="player__play"
                onClick={onPlay}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
            )}

          <div className="player__name">{film.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullscreen}
          >
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
  match: PropTypes.object.isRequired,
};

export default Player;
