import {
  Dialog,
  Flex,
  Text,
  TextField,
  Button,
  Tabs,
  Box,
} from '@radix-ui/themes'

export default function NewDocument() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button size="1">New Document</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Generate a document</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Use your offering's trained model to generate a BX document.
        </Dialog.Description>

        <Tabs.Root defaultValue="conversation-guide">
          <Tabs.List>
            <Tabs.Trigger value="conversation-guide">Conversation Guide</Tabs.Trigger>
            
          </Tabs.List>
          

          <Box pt="3">
            <Tabs.Content value="conversation-guide">
              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Name
                  </Text>
                  <TextField.Root
                    defaultValue="Freja Johnsen"
                    placeholder="Enter your full name"
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Email
                  </Text>
                  <TextField.Root
                    defaultValue="freja@example.com"
                    placeholder="Enter your email"
                  />
                </label>
              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button>Generate Document</Button>
                </Dialog.Close>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="documents">
              <Text size="2">Access and update your documents.</Text>
            </Tabs.Content>

            <Tabs.Content value="settings">
              <Text size="2">
                Edit your profile or update contact information.
              </Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Dialog.Content>
    </Dialog.Root>
  )
}
