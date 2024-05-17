import PropTypes from 'prop-types';
import React from 'react';

export default function InputField({
  name,
  htmlFor,
  required,
  type,
  labelName,
  disabled,
  ...props
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-white  pb-1 font-medium text-xl mt-4"
      >
        {labelName} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        name={name}
        id={htmlFor}
        disabled={disabled}
        required={required}
        type={type}
        {...props}
        className="bg-white rounded-[10px]  h-14 pl-4 w-full flex items-center"
      />
    </div>
  );
}

InputField.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  name: '',
  placeholder: '',
  required: false,
  disabled: false,
};
