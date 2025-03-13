'use client';

import { usePathname } from 'next/navigation';
import Layout from './components/layout/layout';
import localFont from 'next/font/local';
import MetaData from './metadata';
import { CartProvider } from "@/context/cart-context";

import Header from './components/header/header';
import Footer from './components/footer/footer';

import '../style/style.scss';
import { isProd } from '@/const';

const font = localFont({
  src: [
    {
      path: './fonts/fira-sans-300.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/fira-sans-400.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/fira-sans-500.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/fira-sans-600.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/fira-sans-700.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/fira-sans-800.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: './fonts/roboto-400.woff2',
      weight: '400',
      style: 'normal'
    }
  ]
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname();

  const getHeaderContent = () => {
    return isProd || pathname !== '/' ? <Header /> : null;
  };

  function getFooterContent() {
    if (!isProd && pathname === '/') {
      return null;
    }

    return (
      <Footer />
    );
  }

  return (
    <html lang="ru">
      <MetaData />
      <body className={font.className}>
        <div className="wrapper">
          <CartProvider>
            {getHeaderContent()}
            <Layout>{children}</Layout>
            {getFooterContent()}
          </CartProvider>
        </div>
      </body>
    </html>
  )
}
