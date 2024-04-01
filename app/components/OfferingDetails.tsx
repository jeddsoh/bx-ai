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

export default function OfferingDetails() {
  return (
    <Card size="4">
      <Flex direction="column" gap="5">
        <Heading>Offering Details</Heading>
        <Text>
          Please provide some basic details about this offering, so that we
          might be able to establish some boundaries to generate text.{' '}
        </Text>
        <Flex direction="column" gap="4">
          <Flex direction="column" gap="1">
            <Text as="label">Company Name</Text>
            <TextField.Root placeholder="Company Name"></TextField.Root>
          </Flex>
          <Flex direction="column" gap="1">
            <Text as="label">Service/Industry</Text>
            <TextField.Root placeholder="Company Name"></TextField.Root>
          </Flex>
          <Flex direction="column" gap="1">
            <Text as="label">Application of Technology</Text>
            <TextField.Root placeholder='e.g. - "Medical Devices"'></TextField.Root>
          </Flex>
          <Flex direction="column" gap="1">
            <Text as="label">Timespan</Text>
            <TextField.Root placeholder="Select date"></TextField.Root>
          </Flex>
        </Flex>
        <Flex gap="4">
          <Button>Next: Knowledge Base</Button>
        </Flex>
      </Flex>
    </Card>
  )
}
