import React from 'react';
import { IconProps } from './icon.types';

const Icon: React.FC<IconProps> = ({ path: Path, width = 47, height = 18 }) => {
  return (
    <Path width={width} height={height} />
  );
};

export default Icon;
