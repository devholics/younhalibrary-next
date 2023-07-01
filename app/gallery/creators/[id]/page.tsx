import { notFound } from 'next/navigation'

import { getCreatorDetail } from '../../_lib/api'

import PhotoDisplay from "@/app/gallery/_components/photo-display";
import React, {Suspense} from "react";
import OrderingMenu from "@/app/gallery/_components/ordering-menu";
import NavLink from "@/app/gallery/_components/nav-link";

function PhotoDisplayLoading() {
    return (
        <div className="text-center py-12">
            <h3>불러오는 중...</h3>
        </div>
    )
}

export default async function CreatorPhotoGallery({ params, searchParams }: {
    params: {
        id: bigint
    },
    searchParams: {
        page?: string,
        order?: string
    }
}) {
    const path = `/gallery/creators/${params.id}`
    const creator = await getCreatorDetail(params.id)

    if (!creator) {
        notFound()
    }

    return (
        <div className="2xl:container px-6 mx-auto mt-6">
            <div className="flex my-3">
                <div className="flex text-slate-500 dark:text-slate-400 me-auto gap-2">
                    <NavLink href={path} selected><span className="font-semibold">사진</span> { creator.photo_count.toLocaleString() }</NavLink>
                    <NavLink href={`${path}/videos`}><span className="font-semibold">영상</span> { creator.video_count.toLocaleString() }</NavLink>
                </div>
                <OrderingMenu path={path} current={searchParams.order} />
            </div>
            <Suspense fallback={<PhotoDisplayLoading />}>
                <PhotoDisplay path={path} page={searchParams.page} order={searchParams.order} creatorId={creator.id} />
            </Suspense>
        </div>
    )
}