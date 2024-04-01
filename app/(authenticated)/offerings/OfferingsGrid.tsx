import { createClient } from '@/utils/supabase/server'

import { Heading, Text, Card, Grid } from '@radix-ui/themes'

export default async function OfferingsGrid() {
  const supabase = createClient()

  let { data: offerings } = await supabase.from('offerings').select('*')

  return (
    <Grid columns="4" gap="4" width="100%">
      {offerings &&
        offerings.map((offering) => (
          <Card key="companyName" asChild>
            <a href={`/offerings/${offering.company_name}`}>
              <Heading size="3">{offering.company_name}</Heading>
              <Text>{offering.service}</Text>
            </a>
          </Card>
        ))}
    </Grid>
  )
}
