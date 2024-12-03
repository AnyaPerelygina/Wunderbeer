import { FC } from 'react'
import { Heading, Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './doc.module.scss'
import { DocProps } from './doc.types'

const Doc: FC<DocProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Wrapper>
        <Heading tagName="h1" className={styles.title}>
          Политика конфиденциальности
        </Heading>
      </Wrapper>
    </main>
  )
}

export default Doc
