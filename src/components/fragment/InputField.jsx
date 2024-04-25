import PropTypes from 'prop-types';
import React from 'react';
import Input from '../element/Input';
import Label from '../element/Label';

export default function InputField({
  name,
  htmlFor,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <Label htmlFor={htmlFor} name={name} />
      <Input
        placeholder={placeholder}
        id={htmlFor}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

InputField.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  name: '',
  placeholder: '',
  value: '',
  onChange: () => {},
};
