'use client'

import { Container, Heading, Button, Card, TextField } from '@radix-ui/themes'

import { createNewOffering } from './actions'

export default async function NewOfferingPage() {
  const handleSubmit = async (event) => {
    event.preventDefault() // Prevent the default form submission behavior

    // Construct an object with the input values
    const formData = {
      companyName: event.target.company_name.value,
      service: event.target.service.value,
    }

    // Call your action function with the constructed object
    await createNewOffering(formData)

    // Redirecting is handled in createNewOffering, but you can also do it here if necessary
  }

  return (
    <Container>
      <Heading>Add a new offering</Heading>
      <Card>
        <form onSubmit={handleSubmit}>
          <TextField.Root
            placeholder="Company Name"
            id="company_name"
            name="company_name"
            required
          >
            <TextField.Slot></TextField.Slot>
          </TextField.Root>
          <TextField.Root
            placeholder="Service"
            id="service"
            name="service"
            required
          >
            <TextField.Slot></TextField.Slot>
          </TextField.Root>
          <Button asChild color="gray" variant="soft">
          <a href="/dashboard">Cancel</a>
        </Button>
        <Button>
          Create Offering
        </Button>
        </form>
      </Card>
    </Container>
  )
}
