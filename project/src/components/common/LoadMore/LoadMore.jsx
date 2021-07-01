import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/actions';

function LoadMore({changeLimitFilms}) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={changeLimitFilms}>Show more</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeLimitFilms() {
    dispatch(ActionCreator.changeLimit());
  },
});

LoadMore.propTypes = {
  changeLimitFilms: PropTypes.func.isRequired,
};

export {LoadMore};
export default connect(null, mapDispatchToProps)(LoadMore);

