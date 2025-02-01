import { ButtonProps } from './button.types';
import styles from './button.module.scss';

export default function Button({ onClick, className = '', children, type='button', disabled = false }: ButtonProps) {
  return (
    <button type={type} className={`${styles.button} ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
