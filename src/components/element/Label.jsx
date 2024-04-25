import PropTypes from 'prop-types';
import React from 'react';

export default function Label({ htmlFor, name, ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className="block text-white  pb-1 font-medium text-xl"
    >
      {name}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  name: PropTypes.string,
};

Label.defaultProps = {
  htmlFor: '',
  name: '',
};
