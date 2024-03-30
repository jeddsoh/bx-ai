import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import {
  Section,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Badge,
  Card,
  TextField,
} from '@radix-ui/themes'
import { useState } from 'react'

export default async function NewOfferingPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return (
    <Container>
      <Heading>Train Knowledge Base for Offering</Heading>
      <Card>
        <form>
          <input type="file"></input>
          <Box>or</Box>
          <TextField.Root placeholder="Paste a URL">
            <TextField.Slot></TextField.Slot>
          </TextField.Root>

        </form>
      </Card>
      <Button asChild color="gray" variant="soft">
        <a href="/dashboard">Cancel</a>
      </Button>
      <Button asChild>
        <a href="/offering">Train Model</a>
      </Button>
    </Container>
  )
}
