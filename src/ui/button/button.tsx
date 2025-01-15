import { ButtonProps } from './button.types';
import styles from './button.module.scss';

export default function Button({ onClick, className = '', children, type='button' }: ButtonProps) {
  return (
    <button type={type} className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
