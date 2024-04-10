import { Container, Flex, Heading, Button } from '@radix-ui/themes'
import OfferingsGrid from '../offerings/OfferingsGrid'
import NewOffering from '../new/offering/NewOffering'

export default function PrivatePage() {
  return (
    <Container>
      <Flex align="center" justify='between' gap="4" pb='4'>
        <Heading>Offerings</Heading>
        <NewOffering />
      </Flex>
      <OfferingsGrid />
    </Container>
  )
}
