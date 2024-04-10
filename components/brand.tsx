import { Flex, Text, Heading } from '@radix-ui/themes'
import Link from 'next/link'
import { headingFont } from '@/app/fonts'

export function Brand() {
  return (
    <Link href='/'>
      <Flex align="center" gap="2">
        <Heading className={headingFont.className}>BX<span className='text-violet-400'>AI</span></Heading>
      </Flex>
    </Link>
  )
}
