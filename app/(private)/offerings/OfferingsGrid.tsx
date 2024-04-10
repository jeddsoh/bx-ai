import { Heading, Text, Card, Grid } from '@radix-ui/themes'

export default async function OfferingsGrid() {
  const offerings = [
    { title: 'Title 1', service: 'Service 1' },
    { title: 'Title 1', service: 'Service 1' },
  ]

  return (
    <Grid
      gap="4"
      width="100%"
      columns={{
        initial: '1',
        md: '4',
      }}
    >
      {offerings &&
        offerings.map((offering) => (
          <Card key="companyName" asChild>
            <a href={`/offerings/${offering.title}`}>
              <Heading size="3">{offering.title}</Heading>
              <Text>{offering.service}</Text>
            </a>
          </Card>
        ))}
    </Grid>
  )
}
