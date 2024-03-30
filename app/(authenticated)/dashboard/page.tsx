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
        <Heading>Dashboard</Heading>
        <Button asChild>
          <a href="/new/offering">New Offering</a>
        </Button>
        <Heading size="5">Offerings</Heading>
        <OfferingsGrid />
      </Flex>
    </Container>
  )
}
