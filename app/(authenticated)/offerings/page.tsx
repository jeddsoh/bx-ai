import {
  Container,
  Flex,
  Heading,
  Button,
} from '@radix-ui/themes'
import OfferingsGrid from './OfferingsGrid'

export default function PrivatePage() {
  return (
    <Container>
      <Flex direction="column" align="start" gap="4">
        <Heading>Offerings</Heading>
        <Button asChild size='1'>
          <a href="/new/offering">New Offering</a>
        </Button>
        <OfferingsGrid />
      </Flex>
    </Container>
  )
}
