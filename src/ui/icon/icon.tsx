import React from 'react';
import { IconProps } from './icon.types';

const Icon: React.FC<IconProps> = ({ link, width = 47, height = 18 }) => {
  return (
    <Icon link={link} width={width} height={height} />
  );
};

export default Icon;
