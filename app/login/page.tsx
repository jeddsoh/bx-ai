import { login, signup } from './actions'
import {
  Flex,
  Heading,
  Text,
  Button,
  Card,
  TextField,
  Container,
  Section,
} from '@radix-ui/themes'

export default function LoginPage() {
  return (
    <Section>
      <Container>
        <form>
          <Card size="4">
            <Flex direction="column" gap="5">
              <Heading>Log In</Heading>
              <Text>Use your email and password.</Text>
              <Flex direction="column" gap="4">
                <Flex direction="column" gap="1">
                  <Text as="label" htmlFor="email">
                    Email
                  </Text>
                  <TextField.Root
                    id="email"
                    name="email"
                    type="email"
                    required
                  ></TextField.Root>
                </Flex>
                <Flex direction="column" gap="1">
                  <Text as="label" htmlFor="password">
                    Password
                  </Text>
                  <TextField.Root
                    id="password"
                    name="password"
                    type="password"
                    required
                  ></TextField.Root>
                </Flex>
              </Flex>
              <Flex gap="4">
                <Button formAction={login}>Log In</Button>
                <Button formAction={signup}>Sign Up</Button>
              </Flex>
            </Flex>
          </Card>
        </form>
      </Container>
    </Section>
  )
}
