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

import { createNewOffering } from './actions'

export default function NewOffering() {
  const handleSubmit = async (event: any) => {
    event.preventDefault() // Prevent the default form submission behavior

    // Construct an object with the input values
    const formData = {
      title: event.target.title.value,
      service: event.target.service.value,
    }

    // Call your action function with the constructed object
    await createNewOffering(formData)

    // Redirecting is handled in createNewOffering, but you can also do it here if necessary
  }

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
        <form onSubmit={handleSubmit}>
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
