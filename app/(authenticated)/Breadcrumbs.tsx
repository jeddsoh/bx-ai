'use client'
import { Badge } from '@radix-ui/themes'
import { usePathname } from 'next/navigation'

export default function Breadcrumds() {
  return <Badge>{usePathname()}</Badge>
}
