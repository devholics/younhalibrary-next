import React from 'react'
import Image from "next/image";
import blankProfile from "@/public/blank-profile.png";
import SocialIcon from "@/app/gallery/creators/_components/social-icon";
import {getCreatorDetail} from "@/app/gallery/_lib/api";
import {notFound} from "next/navigation";

import CreatorProfile from '../../_components/creator-profile'

export default async function CreatorDetailLayout({ params, children }: {
    params: {
        id: bigint
    },
    children: React.ReactNode
}) {
    const creator = await getCreatorDetail(params.id)

    if (!creator) {
        notFound()
    }

    return (
        <main>
            <div className="w-full h-60 bg-gradient-to-r from-cyan-100 to-blue-300 dark:from-cyan-900 dark:to-blue-800"></div>
            <div className="2xl:container mx-auto px-6 relative">
                <div className="md:px-4">
                    <div
                        className="rounded-full ring-4 ring-white dark:ring-slate-800
                                   bg-slate-600 overflow-clip w-24 h-24 xl:w-32 xl:h-32 absolute -top-12 xl:-top-16"
                    >
                        <CreatorProfile creator={creator} className="w-full h-full" />
                    </div>
                    <div className="h-12 xl:h-16"></div>
                    <h1 className="mt-3 font-bold text-slate-800 dark:text-slate-200">{ creator.name }</h1>
                    <div className="flex gap-2 mt-2 text-slate-700 dark:text-slate-300">
                        { creator.websites.map((website: any) => <SocialIcon key={website.url} website={website} />) }
                    </div>
                </div>
            </div>
            { children }
        </main>
    )
}