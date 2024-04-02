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
  Tabs,
  Box,
  Link,
} from '@radix-ui/themes'

export default function LoginPage() {
  return (
    <Section>
      <Container size="1">
        <Flex direction="column" gap="4" pb="8">
          <Link href="/" size="2">
            Back
          </Link>
          <Heading size="9">Business Experience AI</Heading>
        </Flex>
        <Tabs.Root defaultValue="Log In">
          <Tabs.List>
            <Tabs.Trigger value="Log In">Log In</Tabs.Trigger>
            <Tabs.Trigger value="Sign Up">Sign Up</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Card>
              <Tabs.Content value="Log In">
                <form>
                  <Flex direction="column" gap="4">
                    <Heading>Log in</Heading>
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
                    <Button formAction={login}>Log In</Button>
                  </Flex>
                </form>
              </Tabs.Content>
              <Tabs.Content value="Sign Up">
                <form>
                  <Flex direction="column" gap="4">
                    <Heading>Sign up</Heading>
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
                    <Button formAction={signup}>Create account</Button>
                  </Flex>
                </form>
              </Tabs.Content>
            </Card>
          </Box>
        </Tabs.Root>
      </Container>
    </Section>
  )
}
