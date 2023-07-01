import React from 'react'

import {getTagDetail} from "@/app/gallery/_lib/api";
import {notFound} from "next/navigation";

export default async function TagDetailLayout({ params, children }: {
    params: {
        id: bigint
    },
    children: React.ReactNode
}) {
    const tag = await getTagDetail(params.id)

    if (!tag) {
        notFound()
    }

    return (
        <main>
            <div className="2xl:container mx-auto px-6 mt-3">
                <h1 className="mb-3">&quot;{tag.name}&quot; 관련 사진 및 영상</h1>
                <p>{tag.description}</p>
            </div>
            { children }
        </main>
    )
}