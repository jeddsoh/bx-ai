import { Container, Heading, Box } from '@radix-ui/themes'
import { headingFont } from '@/app/fonts'

export default function NewOfferingPage() {
  return (
    <Container>
      {' '}
      <Heading className={headingFont.className}>Create a new offering</Heading>
      <Box height="4rem"></Box>
    </Container>
  )
}
