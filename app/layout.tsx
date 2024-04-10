import type { Metadata } from 'next'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { ClerkProvider } from '@clerk/nextjs'
import { Navbar, Footer } from '@/components/navigation'
import { bodyFont } from './fonts'

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
    <ClerkProvider>
      <html lang="en">
        <body className={bodyFont.className}>
          <Theme accentColor="violet" appearance="dark">
            <div className="flex flex-col h-screen p-4 gap-8">
              <Navbar />
              <main className="flex-1 overflow-auto">{children}</main>
              <Footer />
            </div>
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  )
}
