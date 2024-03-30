'use client'
import { Badge } from '@radix-ui/themes'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
  return <Badge>{usePathname()}</Badge>
}
