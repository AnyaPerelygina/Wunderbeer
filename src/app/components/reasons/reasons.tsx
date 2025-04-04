import styles from './reasons.module.scss';
import { ReasonsProps } from './reasons.type';

import Icon from '@/ui/icon/icon';

export default function Reasons({ reasonsList, className }: ReasonsProps) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {reasonsList.map((reasosns) => (
        <li className={styles.item} key={reasosns.key}>
          <div className={styles.image}>
            <Icon path={reasosns.link} />
          </div>
          <span>{reasosns.title}</span>
          {reasosns.description && <p>{reasosns.description}</p>}
        </li>
      ))}
    </ul>
  );
}
