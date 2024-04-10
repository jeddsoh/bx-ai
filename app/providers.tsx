import { Theme, Button } from '@radix-ui/themes'
import { useState } from 'react'

export function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Toggle function to switch themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  return (
    <Theme appearance={theme} accentColor="violet">
        <Button onClick={toggleTheme}>Toggle theme</Button>
      {children}
    </Theme>
  )
}
