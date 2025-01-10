import { ButtonProps } from './button.types';
import styles from './button.module.scss';

export default function Button({ onClick, className = '', children }: ButtonProps) {
  return (
    <button type="button" className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
