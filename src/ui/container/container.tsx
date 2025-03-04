import React from 'react';

import { ContainerProps } from './container.types';
import styles from './container.module.scss';

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};
