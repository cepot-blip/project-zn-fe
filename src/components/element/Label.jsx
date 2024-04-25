import PropTypes from 'prop-types';
import React from 'react';

export default function Label({ name, ...props }) {
  return (
    <label
      htmlFor={name}
      {...props}
      className="block text-white  pb-1 font-medium text-xl"
    >
      {name}
    </label>
  );
}

Label.propTypes = {
  name: PropTypes.string.isRequired,
};
