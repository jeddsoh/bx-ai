'use client'

import {
  Container,
  Heading,
  Button,
  Card,
  TextField,
  Dialog,
  Flex,
  Text,
} from '@radix-ui/themes'


export default function NewOffering() {

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button size="1">New Offering</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Create Offering</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Please provide some basic details about this offering, so that we
          might be able to establish some boundaries to generate text.
        </Dialog.Description>
        <form>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Title
              </Text>
              <TextField.Root
                placeholder="Cybersecurity, etc..."
                id="title"
                name="title"
                required
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Service
              </Text>
              <TextField.Root
                placeholder="Service"
                id="service"
                name="service"
                required
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
              <Button>Create Offering</Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  )
}
