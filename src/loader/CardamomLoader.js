import React from 'react';
import PropTypes from 'prop-types';
import './_loader.scss';

const CardamomLoader = (props) => {
  const loaderSize = `loader-wrapper loader-wrapper__${props.size}`;

  return (
    <div className={loaderSize}>
      <span className="hori-bar"></span>
    </div>
  );
};

CardamomLoader.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'big']),
};

CardamomLoader.defaultProps = {
  size: 'small',
};

export default CardamomLoader;
