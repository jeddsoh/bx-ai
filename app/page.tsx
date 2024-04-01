import {
  Section,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Button,
} from '@radix-ui/themes'

export default function Home() {
  return (
    <section>
      <Container>
        <Flex
          direction="column"
          align="center"
          minHeight="100vh"
          justify="center"
        >
          <Heading mb="4">Welcome to Business Experience AI</Heading>
          <Text mb="8">Developed by Nick and BX Team</Text>
          <Flex gap='3'>
            <Button asChild>
              <a href="/components">View Components</a>
            </Button>
            <Button asChild>
              <a href="/login">Go to Live App</a>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </section>
  )
}
