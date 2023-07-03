import Link from 'next/link'

import { LinkIcon } from '@heroicons/react/20/solid'
import React from "react";

import CreatorProfile from './creator-profile'
import ThumbnailImage from './thumbnail-image'

export default function Thumbnail({ photo }: {
    photo: any
}) {
    return (
        <div className="relative mb-4">
            <ThumbnailImage src={photo.url} width={photo.width || 0} height={photo.height || 0} />
            <div className="opacity-0 hover:opacity-100 ease-in-out duration-150 text-slate-300">
                <Link href={`/gallery/photos/${photo.id}`}>
                    <div className="absolute inset-0 bg-slate-800/50"></div>
                </Link>
                <div className="absolute top-3 right-3">
                    <a href={photo.source.url} target="_blank">
                        <LinkIcon className="w-7 h-7 text-slate-300 hover:text-slate-100 ease-in-out duration-150" />
                    </a>
                </div>
                <div className="absolute bottom-0 inset-x-0 px-3 py-2 flex">
                    <Link href={`/gallery/creators/${photo.creator.id}`} className="my-auto">
                        <div
                            className="rounded-full ring-1 ring-slate-800
                                       bg-slate-600 overflow-clip w-8 h-8"
                        >
                            <CreatorProfile creator={photo.creator} className="w-full h-full" />
                        </div>
                    </Link>
                    <div className="ms-2 text-xs">
                        <a href={photo.source.url} target="_blank" className="text-lg line-clamp-1">{ photo.title || photo.source.title || '(Untitled)' }</a>
                        <Link href={`/gallery/creators/${photo.creator.id}`}>{ photo.creator.name }</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}