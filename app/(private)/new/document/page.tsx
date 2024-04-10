import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Badge,
  Card,
  TextField,
  RadioCards,
} from '@radix-ui/themes'

export default async function NewOfferingPage() {

  return (
    <Container>
      <Heading>Generate a new document</Heading>
      <Card>
        <form>
        <Heading size='3'>What type of BX document do you want to generate?</Heading>

          <Box maxWidth="600px">
            <RadioCards.Root
              defaultValue="1"
              columns={{ initial: '1', sm: '3' }}
            >
              <RadioCards.Item value="1">
                <Flex direction="column" width="100%">
                  <Text weight="bold">One Pager</Text>
                  <Text>A one-page description of the stuff.</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="2">
                <Flex direction="column" width="100%">
                <Text weight="bold">Two Pager</Text>
                <Text>A two-page description of the stuff.</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="3">
                <Flex direction="column" width="100%">
                <Text weight="bold">Three Pager</Text>
                  <Text>A three-page description of the stuff.</Text>
                </Flex>
              </RadioCards.Item>
            </RadioCards.Root>
          </Box>
        </form>
      </Card>
      <Button asChild color="gray" variant="soft">
        <a href="/offerings">Cancel</a>
      </Button>
      <Button asChild>
        <a href="/offerings">Generate Document</a>
      </Button>
    </Container>
  )
}
