import {
  Flex,
  Heading,
  Text,
  Button,
  Card,
  TextField,
  Link,
  Spinner,
} from '@radix-ui/themes'

export default function Training() {
  return (
    <Card size="4">
      <Flex direction="column" gap="5">
        <Heading>Training Model</Heading>
        <Spinner size="3" />
        <Text>
          Uploading files and training the Model to be specific to [ Company ]’s
          needs.
        </Text>
      </Flex>
    </Card>
  )
}
