import PropTypes from 'prop-types';
import React from 'react';
import Input from '../element/Input';
import Label from '../element/Label';

export default function InputField({ name, htmlFor, placeholder, ...props }) {
  return (
    <div>
      <Label htmlFor={htmlFor} name={name} />
      <Input placeholder={placeholder} id={htmlFor} {...props} />
    </div>
  );
}

InputField.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  name: '',
  placeholder: '',
};
