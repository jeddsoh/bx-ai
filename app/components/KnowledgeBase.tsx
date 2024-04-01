import {
  Flex,
  Heading,
  Text,
  Button,
  Card,
  TextField,
  Link,
} from '@radix-ui/themes'

export default function KnowledgeBase() {
  return (
    <Card size="4">
      <Flex direction="column" gap="5">
        <Heading>Knowledge Base</Heading>
        <Text>
          Reference the URLs that contain information about [ Service ] in [
          Application ]. If you have local files, you can upload them here as
          well. <br />
          <br />
          These should be from across the industry can be web articles, or
          transcripts of interviews, glossaries. Try to start with a half-dozen
          references, you can always add more later.
        </Text>
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
        <Flex gap="4" justify="end">
          <Button variant="soft">Back</Button>
          <Button>Next: Knowledge Base</Button>
        </Flex>
      </Flex>
    </Card>
  )
}
