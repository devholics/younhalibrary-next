'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import * as gtm from '../_lib/gtm'

export function NavigationEvents() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const path = pathname + searchParams.toString()
        console.log(path)
        gtm.pageview(path)
    }, [pathname, searchParams])

    return null
}