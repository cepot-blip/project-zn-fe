import { Avatar } from '@nextui-org/react';
import PropTypes from 'prop-types';
import React from 'react';

export default function UserImg({ src, alt, size }) {
  const url = 'https://th.bing.com/th/id/OIP.Sw0g2adwtwCJAbIAveYGbgHaHa?rs=1&pid=ImgDetMain'; // prettier-ignore
  return <Avatar src={src || url} size={size} alt={alt} />;
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
