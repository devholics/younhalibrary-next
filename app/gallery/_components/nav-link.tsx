import Link from 'next/link'
import React from 'react'

export default function NavLink({ href, selected = false, children }: {
    href: string,
    selected?: boolean,
    children: React.ReactNode
}) {
    const style = (selected ? 'bg-gray-300/25 dark:bg-sky-300/25 rounded-full' : 'ease-in-out duration-150 hover:bg-gray-300/25 dark:hover:bg-sky-300/25 hover:rounded-full')

    return (
        <Link href={href} className="inline-block">
            <div className={`${style} px-4 py-3`}>
                { children }
            </div>
        </Link>
    )
}