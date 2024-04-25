import PropTypes from 'prop-types';
import React from 'react';

export default function Input(props) {
  return (
    <input
      {...props}
      className="bg-white rounded-[10px]  h-14 pl-4 w-full flex items-center"
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  name: '',
  placeholder: '',
  value: '',
  onChange: () => {},
};
