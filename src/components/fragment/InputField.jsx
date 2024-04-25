import PropTypes from 'prop-types';
import React from 'react';
import Input from '../element/Input';
import Label from '../element/Label';

export default function InputField({ name, ...props }) {
  return (
    <div>
      <Label name={name} {...props} />
      <Input id={name} {...props} />
    </div>
  );
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
};
