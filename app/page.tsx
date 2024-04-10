import { Button, Flex } from "@radix-ui/themes"
import Link from "next/link"

export default function PrivatePage() {
  return (
    <Link href='/dashboard'>
      <Button>Enter App</Button>
    </Link>
  )
}
