import type { Metadata } from 'next';
import { basePath } from '@/const';

export const metadata: Metadata = {
  title: 'Wunderbeer',
  description: 'Wunderbeer - магазин пива.'
};

export default function MetaData() {
  return (
    <head>
      <title>Wunderbeer</title>
      <link
        rel='icon'
        type='image/svg+xml'
        href={`${basePath}/favicon.ico`}
      />
    </head>
  );
}
