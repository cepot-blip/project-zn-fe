import { Avatar } from '@nextui-org/react';
import PropTypes from 'prop-types';
import React from 'react';

export default function UserImg({ src, alt, size }) {
  return <Avatar src={src} size={size} alt={alt} />;
}

UserImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.number,
};

UserImg.defaultProps = {
  src: '',
  alt: '',
  size: 12,
};
