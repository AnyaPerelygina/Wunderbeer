import Image from 'next/image';
import { basePath } from '@/const';

import { Container } from '../container/container';
import FilterResults from '@/app/components/filter/filter-results/filter-results';
import Filter from '@/app/components/filter/filter';
import FormForQuestions from '../forms/form-for-questions/form-for-questions';
import CatalogList from '@/app/components/catalog-list/catalog-list';

import styles from './catalog-block.module.scss';

export default function CatalogBlock() {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <FilterResults count={96} />
          <Filter />
          <div className={styles.wrapperForm}>
            <div className={styles.background}>
              <Image
                src={`${basePath}/delivery/background-hops-mini.webp`}
                width={255}
                height={364}
                alt="Фоновое изображение."
              />
            </div>
            <FormForQuestions />
          </div>
          <CatalogList />
        </div>
      </Container>
    </section>
  )
}
