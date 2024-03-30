import { Dialog, Flex, Text, TextField, Button, Tabs, Box } from '@radix-ui/themes'

export default function SourceDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>New Source</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>New Source</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Provide source material to train the custom model for this offering.
        </Dialog.Description>
        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="link">Add Link</Tabs.Trigger>
            <Tabs.Trigger value="upload" disabled={true}>Upload Document</Tabs.Trigger>
          </Tabs.List>
          <Box pt="3">
            <Tabs.Content value="link">
              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Paste link here
                  </Text>
                  <TextField.Root
                    defaultValue=""
                    placeholder="example.com"
                  />
                </label>
              </Flex>
            </Tabs.Content>
          </Box>
        </Tabs.Root>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Train Model</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
