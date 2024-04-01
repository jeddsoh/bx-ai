import {
  Section,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Button,
  Card,
  TextField,
} from '@radix-ui/themes'
import OfferingDetails from './OfferingDetails'
import KnowledgeBase from './KnowledgeBase'
import Training from './Training'
import ConversationGuide from './ConversationGuide'

export default function Home() {
  return (
    <Section>
      <Container size="1">
        <Flex direction="column" align="stretch" gap='8'>
          <Heading mb="4">Components</Heading>
          <OfferingDetails/>
          <KnowledgeBase />
          <Training />
          <ConversationGuide />
        </Flex>
      </Container>
    </Section>
  )
}
