'use client'

import Link from 'next/link';

import { Container } from "@/ui/container/container";

import styles from './404.module.scss';

export default function Error404() {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>404</h2>
            <p>Такой страницы не сущеcтвует</p>
            <Link href={'/home'} className={styles.link}>
              <span>Вернутся на главную страницу</span>
            </Link>
        </div>
      </Container>
    </section>
  )
}
