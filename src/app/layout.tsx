import { ReactNode } from 'react'
import { Footer } from '@modules/footer'
import { Header } from '@modules/header'

import '@styles/global.scss'

import localFont from 'next/font/local'
import { Provider } from '@service/provider'

const font = localFont({
  src: [
    {
      path: './fonts/fira-sans-300.woff2',
      weight: '300',
      style: 'normal'
    },    {
      path: './fonts/fira-sans-400.woff2',
      weight: '400',
      style: 'normal'
    },    {
      path: './fonts/fira-sans-500.woff2',
      weight: '500',
      style: 'normal'
    },    {
      path: './fonts/fira-sans-600.woff2',
      weight: '600',
      style: 'normal'
    },    {
      path: './fonts/fira-sans-700.woff2',
      weight: '700',
      style: 'normal'
    },    {
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
  children: ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <Provider>
          <div id="root">
            <Header />
            {children}
            <Footer />
          </div>

          <div id="modal-root" />
        </Provider>
      </body>
    </html>
  )
}
