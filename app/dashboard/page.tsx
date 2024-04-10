import { headingFont } from '../fonts'

import { Box, Heading, Container, Button, Grid, Card } from '@radix-ui/themes'

import Link from 'next/link'

interface offering {
  title: string
  id: string
}

const offerings: offering[] = [
  {
    title: 'Yakuza',
    id: '01',
  },
  {
    title: 'Ho Ching',
    id: '02',
  },
  {
    title: 'Yakuza',
    id: '03',
  },
  {
    title: 'Ho Ching',
    id: '04',
  },
  {
    title: 'Yakuza',
    id: '05',
  },
  {
    title: 'Ho Ching',
    id: '06',
  },
]

function mapOfferings() {
  return (
    <Grid columns="4" width="100%" gap="4">
      {offerings.map((offering) => (
        <Link key={offering.title} href={`/team/${offering.title}`}>
          <Card>
            <Heading size="4" className={headingFont.className}>
              {offering.title}
            </Heading>
          </Card>
        </Link>
      ))}
    </Grid>
  )
}

export default function DashboardPage() {
  return (
    <Container>
      <Heading className={headingFont.className}>Welcome, Jedd</Heading>
      <Box height="4rem"></Box>
      <Heading as="h1" size="9" className={headingFont.className}>
        Offerings
      </Heading>
      <Box height="1.5rem"></Box>
      {mapOfferings()}
      <Box height="1rem"></Box>
      <Button asChild>
        <Link href="/team/new/offering">New Offering</Link>
      </Button>
    </Container>
  )
}
