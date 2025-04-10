import Icon from '../icon/icon';

import styles from './title.module.scss';
import { TitleProps } from './title.types';

import WheatYellow from '@/assets/wheat-yellow.svg';
import WheatGreen from '@/assets/wheat-green.svg';

export default function Title( { title, className, iconColor }: TitleProps) {
  const iconPath = iconColor === 'green' ? WheatGreen : WheatYellow;

  return (
    <div className={`${styles.title} ${className}`}>
      <div className={styles.wrapperIcon}>
        <Icon path={iconPath} />
        <Icon path={iconPath} />
      </div>
      <h2>{title}</h2>
    </div>
  )
}
