import { Container } from '@/ui/container/container';
import styles from './order-block.module.scss';

export default function OrderBlock() {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
        </div>
      </Container>
    </section>
  )
}
