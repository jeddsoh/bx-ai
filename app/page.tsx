import {
  Section,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Link,
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
          <Link href="/login">Go to Log In</Link>
        </Flex>
      </Container>
    </section>
  )
}
