'use client'
import { Flex, Badge } from '@radix-ui/themes'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter((segment) => segment !== '')

  return (
    <Flex align='center' gap='2'>
      {segments.map((segment) => (
        <Badge variant="soft" color="gray" key={segment} asChild>
            <a href={segment === 'offerings' ? `/${segment}` : `/offerings/${segment}` }>{segment}</a>
        </Badge>
      ))}
    </Flex>
  )
}
