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
  Link,
  Grid,
  DataList,
  Code,
  Spinner,
} from '@radix-ui/themes'
import { CheckIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  const generatedDocs = [
    {
      title: 'document-1.txt',
    },
    {
      title: 'document-2.txt',
    },
  ]

  return (
    <Container>
      <Heading>Offering Name Here</Heading>
      <Card>
        <Heading size="5">Knowledge Base</Heading>
        <Text>First, you need to train the knowledge base.</Text>
        <Box>
          <Button asChild>
            <a href="/offering/train">Start Training</a>
          </Button>
          <Box>
            <Badge>
              <Spinner size="1" />
              Currently training...
            </Badge>
          </Box>
          <Box>
            <Badge color="green">
              <CheckIcon />
              Trained
            </Badge>
          </Box>
        </Box>
        <Grid columns="4" gap="4"></Grid>
      </Card>
      <Card>
        <Heading size="5">Documents</Heading>
        <Text>There are no documents.</Text>
        <Box>
          <Button asChild>
            <a href="/new/document">New Document</a>
          </Button>
        </Box>
        <Flex direction="column" align="start">
          {generatedDocs.map((doc) => (
            <Badge key="title">{doc.title}</Badge>
          ))}
        </Flex>
      </Card>
    </Container>
  )
}
