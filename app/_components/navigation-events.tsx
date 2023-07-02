'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import * as gtm from '../_lib/gtm'

export function NavigationEvents() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = `${pathname}?${searchParams}`
        console.log(url)
        gtm.pageview(url)
    }, [pathname, searchParams])

    return null
}
