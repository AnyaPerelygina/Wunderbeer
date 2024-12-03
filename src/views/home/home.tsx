'use client'

import { FC } from 'react'
import Link from 'next/link'
import { Heading, Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './home.module.scss'
import { HomeProps } from './home.types'

const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Wrapper>
        <Heading tagName="h1" className={styles.title}>
          Wunderbeer - магазин вкусного пива
        </Heading>
        <Link  href="/doc" className={styles.link}>Перейти на страницу документации</Link>
      </Wrapper>
    </main>
  )
}

export default Home
