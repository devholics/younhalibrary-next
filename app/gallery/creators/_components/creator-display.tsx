import { getCreatorList } from '../../_lib/api'
import { notFound } from "next/navigation"
import Image from 'next/image'
import Link from 'next/link'

import blankProfile from '@/public/blank-profile.png'

import CreatorProfile from '../../_components/creator-profile'

function SmallProfile({ creator }: {
    creator: any
}) {
    return (
        <div className="w-full aspect-square relative bg-gray-600">
            <CreatorProfile creator={creator} className="w-full h-full" />
            <Link href={`/gallery/creators/${creator.id}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-600 to-30% px-3 py-2 flex flex-col justify-end text-white">
                    <span>{ creator.name }</span>
                    <span className="text-xs">{ creator.num_photos ? `사진 ${ creator.num_photos.toLocaleString() }장` : '' }</span>
                </div>
            </Link>
        </div>
    )
}

export default async function CreatorDisplay({ page }: {
    page?: string
}) {
    const creatorList = await getCreatorList(page)

    if (!creatorList) {
        notFound()
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mx-4">
            { creatorList.results.map((creator: any) => <SmallProfile key={creator.id} creator={creator} />) }
        </div>
    )
}
