import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const BaseInput = React.forwardRef(({ className, htmlType, ...otherProps }, ref) => {
  return (
    <input
      {...otherProps}
      ref={ref}
      className={cn('rc-input', className)}
      type={htmlType}
    />
  );
});

BaseInput.displayName = 'BaseInput';
BaseInput.propTypes = {
  className: PropTypes.string,
  htmlType: PropTypes.string,
};
BaseInput.defaultProps = {
  htmlType: 'text',
};

export default BaseInput;
