'use client'

import { usePathname } from "next/navigation"

export const getDynamicRouteAsString = () => usePathname()