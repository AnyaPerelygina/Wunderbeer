import { Container } from '@/ui/container/container';
import styles from './order-block.module.scss';
import FormOrders from '../forms/form-orders/form-orders';

export default function OrderBlock() {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <FormOrders />
      </Container>
    </section>
  )
}
