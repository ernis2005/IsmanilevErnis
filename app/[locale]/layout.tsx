import { Navigatio } from '@/components/Navigatio/page';
import './globals.scss'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Эрнис Исманалиев ',
  description: 'Generated by create next app',
}
import { notFound } from 'next/navigation';
import { Footer } from '@/components/Footer/page';
interface Person { params: { locale: string }, children: React.ReactNode, }
export default function RootLayout({ children, params: { locale } }: Person) {
  const locales = ['en', 'ru'];
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  return (
    <html lang={locale} >
      <body className='body'>
        <Navigatio />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
