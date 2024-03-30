import {
  Flex,
  Container,
  Box,
  Card,
  TextField,
  Text,
  Heading,
  Button,
  Badge,
  Separator,
} from '@radix-ui/themes'

export default function OfferingDetailsCard() {

  return (
    <Box width="688px" mx="auto">
      <Card size="4">
        <Flex direction="column" gap="6" align="stretch">
          <Flex direction="column" gap="6" align="stretch">
            <Flex gap="2" align="center">
              <Badge color="indigo" variant="outline">
                Offering Details
              </Badge>
              <Badge color="gray">Offerings</Badge>
              <Badge color="gray">Train Model</Badge>
              <Badge color="gray">Conversation Guide</Badge>
            </Flex>
            <Heading>Provide details about the offering</Heading>
            <Text>
              Please provide some basic details about this offering, so that we
              might be able to establish some boundaries to generate text.{' '}
            </Text>
          </Flex>
          <Flex direction="column" align="stretch">
            <Text as="label" mb="2">
              Company Name
            </Text>
            <TextField.Root placeholder="Acme Corporation" mb="4" size="3">
              <TextField.Slot></TextField.Slot>
            </TextField.Root>
            <Text as="label" mb="2">
              Industry or Service
            </Text>
            <TextField.Root
              placeholder="Information Technology"
              mb="4"
              size="3"
            >
              <TextField.Slot></TextField.Slot>
            </TextField.Root>
            <Text as="label" mb="2">
              Application of Technology
            </Text>
            <TextField.Root placeholder="Medical Diagnosis" mb="4" size="3">
              <TextField.Slot></TextField.Slot>
            </TextField.Root>
            <Text as="label" mb="2">
              Time Span
            </Text>
            <TextField.Root placeholder="Jan 2024 - June 2024" size="3">
              <TextField.Slot></TextField.Slot>
            </TextField.Root>
          </Flex>
          <Flex gap="3" justify="end">
            <Button>Back</Button>
            <Button>Next</Button>
          </Flex>
        </Flex>
      </Card>
    </Box>
  )
}
