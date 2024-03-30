import {
  Container,
  Box,
  Heading,
  Button,
  Card,
  TextField,
} from '@radix-ui/themes'

export default async function NewOfferingPage() {

  return (
    <Container>
      <Heading>Train Knowledge Base for Offering</Heading>
      <Card>
        <form>
          <input type="file"></input>
          <Box>or</Box>
          <TextField.Root placeholder="Paste a URL">
            <TextField.Slot></TextField.Slot>
          </TextField.Root>

        </form>
      </Card>
      <Button asChild color="gray" variant="soft">
        <a href="/dashboard">Cancel</a>
      </Button>
      <Button asChild>
        <a href="/offering">Train Model</a>
      </Button>
    </Container>
  )
}