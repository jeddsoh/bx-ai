import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Business Experience AI',
  description: 'Developed by Nick and BX Team',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance='dark' accentColor='violet'>
          <main className='px-4'>
            {children}
            </main>
        </Theme>
      </body>
    </html>
  )
}
