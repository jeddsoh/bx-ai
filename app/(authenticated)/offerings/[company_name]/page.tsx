import {
  Container,
  Flex,
  Heading,
  Button,
  Card,
  Box,
  Text,
  Badge,
} from '@radix-ui/themes'
import TrainedStatus from './TrainedStatus'
import NewDocument from './NewDocument'

export default async function Page() {
  const companyName = 'company_name'

  const generatedDocs = [
    {
      title: 'document-1.txt',
    },
    {
      title: 'document-2.txt',
    },
  ]

  return (
    <Container>
      <Flex align="center" gap="4" mb="4">
        <Heading>{companyName}</Heading>
        <TrainedStatus />
      </Flex>
      <Card>
        <Flex direction="column" gap="4">
          <Flex align="center" gap="4" mb="4" justify="between">
            <Heading size="5">Documents</Heading>
            <NewDocument />
          </Flex>
          <Text>There are no documents.</Text>
          <Flex direction="column" align="start">
            {generatedDocs.map((doc) => (
              <Badge key="title">{doc.title}</Badge>
            ))}
          </Flex>
        </Flex>
      </Card>
    </Container>
  )
}