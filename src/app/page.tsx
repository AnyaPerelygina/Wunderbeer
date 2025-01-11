import { isProd } from '@/const';
import Sitemap from './sitemap/page';
import { redirect } from 'next/navigation';

export default function Main() {
  return (
    <main>
      <div>
        <div>
          {isProd && redirect('/home')}
          {!isProd && <Sitemap />}
        </div>
      </div>
    </main>
  )
}
