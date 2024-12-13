import { isProd } from '@/const';
import Sitemap from './sitemap/sitemap';
import { redirect } from 'next/navigation';

export default function Main() {
  return (
    <main>
      <div>
        <div>
          {isProd && redirect('/')}
          {!isProd && <Sitemap />}
        </div>
      </div>
    </main>
  )
}
