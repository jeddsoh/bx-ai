import {
  Flex,
  Heading,
  Text,
  Button,
  Card,
  TextField,
  Link,
  Skeleton,
} from '@radix-ui/themes'

export default function ConversationGuide() {
  return (
    <Card size="4">
      <Flex direction="column" gap="5">
        <Heading>Conversation Guide</Heading>
        <Text>
          Please use this Conversation Guide in your discussions with Sellers
          and Marketing Leaders around the use of [ Service ] in [ Application
          ].
        </Text>

        <Flex gap="4" justify="end">
          <Button variant="soft">Back</Button>
          <Button>Download DOCX</Button>
        </Flex>
        <Skeleton>
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="1">
              <Text as="label">URL</Text>
              <TextField.Root placeholder="www.gauge.io"></TextField.Root>
              <Link href="">Add Additional URL</Link>
            </Flex>
            <Flex direction="column" gap="1">
              <Text as="label">Upload file</Text>
              <input type="file"></input>
              <Link href="">Add Additional File</Link>
            </Flex>
          </Flex>
        </Skeleton>
      </Flex>
    </Card>
  )
}
