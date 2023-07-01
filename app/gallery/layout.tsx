import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'Younha Library gallery of photos and videos'
}

export default function GalleryLayout({ children }: {
    children: React.ReactNode
}) {
    return <>{children}</>
}