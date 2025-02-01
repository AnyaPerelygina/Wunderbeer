import React from 'react';
import { IconProps } from './icon.types';

const Icon: React.FC<IconProps> = ({ Icon, width = 47, height = 18 }) => {
  return (
    <Icon width={width} height={height} />
  );
};

export default Icon;
