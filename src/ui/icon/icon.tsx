import React from 'react';
import { IconProps } from './icon.types';

const Icon: React.FC<IconProps> = ({ path: Path, width, height }) => {
  return (
    <Path width={width} height={height} />
  );
};

export default Icon;
