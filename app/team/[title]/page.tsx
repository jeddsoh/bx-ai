import { Container, Heading, Box, Button, Grid, Link, Card } from "@radix-ui/themes"
import { headingFont } from "@/app/fonts"

interface document {
  title: string
  id: string
}

const documents: document[] = [
  {
    title: 'Yakuza',
    id: '01',
  },
  {
    title: 'Ho Ching',
    id: '02',
  },
  {
    title: 'Yakuza',
    id: '03',
  },
  {
    title: 'Ho Ching',
    id: '04',
  },
  {
    title: 'Yakuza',
    id: '05',
  },
  {
    title: 'Ho Ching',
    id: '06',
  },
]

function mapDocuments() {
  return (
    <Grid columns="4" width="100%" gap="4">
      {documents.map((document) => (
        <Link key={document.title} href={``}>
          <Card>
            <Heading size="4" className={headingFont.className}>
              {document.title}
            </Heading>
          </Card>
        </Link>
      ))}
    </Grid>
  )
}

export default function OfferingPage({ params }: { params: { title: string } }) {
  return (
    <Container>
      <Heading className={headingFont.className}>{params.title}</Heading>
      <Box height="4rem"></Box>
      <Heading as="h1" size="9" className={headingFont.className}>
        Documents
      </Heading>
      <Box height="1rem"></Box>
      <Button>New Document</Button>
    </Container>
  )
}
