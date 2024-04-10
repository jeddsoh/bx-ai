import { Flex, Box } from '@radix-ui/themes'
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { Brand } from './brand'

export function Navbar() {
  return (
    <Flex
      width="100%"
      maxWidth="2000px"
      mx="auto"
      justify="between"
      align="center"
    >
      <Brand />
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </Flex>
  )
}

export function Footer() {
  return (
    <Flex
      width="100%"
      maxWidth="2000px"
      mx="auto"
      justify="between"
      align="center"
    >
      <Box>Get Help</Box>
      <Box>Developed by Nick and BX Team.</Box>
    </Flex>
  )
}
