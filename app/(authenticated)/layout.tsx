import { Flex, Text, Button, Container } from '@radix-ui/themes'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import Breadcrumbs from './Breadcrumbs'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }
  return (
    <Container>
      <Flex mb="8" py="4" width="100%" justify="between" align="center">
        <Flex gap="2" align="center">
          <Breadcrumbs />
        </Flex>
        <Flex gap="4" align="center">
          <Text>{data.user.email}</Text>
          <Button variant="outline" color="red">
            Log out
          </Button>
        </Flex>
      </Flex>
      {children}
    </Container>
  )
}
