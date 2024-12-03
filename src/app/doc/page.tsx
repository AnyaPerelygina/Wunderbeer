import type { Metadata } from 'next'
import { DocView } from '@views/doc'

export const metadata: Metadata = {
  title: 'Wunderbeer',
  description: 'Политика конфиденциальности Wunderbeer.'
}

export default function Doc() {
  return <DocView />
}
