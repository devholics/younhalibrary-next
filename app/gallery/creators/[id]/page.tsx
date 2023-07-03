import { notFound } from 'next/navigation'

import { getCreatorDetail } from '../../_lib/api'

import PhotoBoard from "@/app/gallery/_components/photo-board";
import React, {Suspense} from "react";
import OrderingMenu from "@/app/gallery/_components/ordering-menu";
import NavLink from "@/app/gallery/_components/nav-link";

export default async function CreatorPhotoGallery({ params, searchParams }: {
    params: {
        id: bigint
    },
    searchParams: {
        page?: string,
        order?: string
    }
}) {
    const creatorId = params.id
    const page = searchParams.page
    const order = searchParams.order
    const path = `/gallery/creators/${creatorId}`
    const creator = await getCreatorDetail(creatorId)
    const boardId = `creator-${creator.id}-${order || 'default'}-${page || 1}`

    if (!creator) {
        notFound()
    }

    return (
        <div className="2xl:container px-6 mx-auto mt-6">
            <div className="flex my-3">
                <div className="flex text-slate-500 dark:text-slate-400 me-auto gap-2">
                    <NavLink href={path} selected><span className="font-semibold">사진</span> { creator.num_photos.toLocaleString() }</NavLink>
                    <NavLink href={`${path}/videos`}><span className="font-semibold">영상</span> { creator.num_videos.toLocaleString() }</NavLink>
                </div>
                <OrderingMenu path={path} current={order} />
            </div>
            <PhotoBoard id={boardId} path={path} page={page} order={order} creatorId={creator.id} />
        </div>
    )
}