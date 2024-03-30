
import { Avatar, Flex, Text, Button, Badge } from '@radix-ui/themes'
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
    <div >
      <Flex py="4" width="100%" justify='between' align='center'>
        <Flex gap='2' align='center'>        <Avatar size='1' fallback="W"></Avatar>
        <Text>{data.user.email}</Text>
        <Breadcrumbs/>
        </Flex>

        <Button color='gray'>Log out</Button>
      </Flex>
      {children}
    </div>
  )
}
