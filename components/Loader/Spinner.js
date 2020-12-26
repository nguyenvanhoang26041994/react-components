import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Spinner = ({ color, size, className, ...otherProps }) => {
  return (
    <div
      style={{
        color,
        '--spinner-size': size
      }}
      className={cn('floader-spinner', className)}
    >
      <div className="floader-spinner-spin" {...otherProps} />
    </div>
  );
};

Spinner.displayName = 'Loader.Spinner';
Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};
Spinner.defaultProps = {};

export default Spinner;

