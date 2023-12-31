import React from "react";
import PhotoBoard from "@/app/gallery/_components/photo-board";

import { getTagDetail } from '../../_lib/api'
import NavLink from "@/app/gallery/_components/nav-link";
import OrderingMenu from "@/app/gallery/_components/ordering-menu";

function PhotoDisplayLoading() {
    return (
        <div className="text-center py-12">
            <h3>불러오는 중...</h3>
        </div>
    )
}

export default async function TagPhotoGallery({ params, searchParams }: {
    params: {
        id: bigint
    },
    searchParams: {
        page?: string,
        order?: string
    }
}) {
    const path = `/gallery/tags/${params.id}`
    const order = searchParams.order
    const page = searchParams.page
    const tag = await getTagDetail(params.id)
    const boardId = `tag-${tag.id}-${order || 'default'}-${page || 1}`

    return (
        <div className="2xl:container px-6 mx-auto mt-6">
            <div className="flex my-3">
                <div className="flex text-slate-500 dark:text-slate-400 me-auto gap-2">
                    <NavLink href={path} selected><span className="font-semibold">사진</span> { tag.photo_count.toLocaleString() }</NavLink>
                    <NavLink href={`${path}/videos`}><span className="font-semibold">영상</span> { tag.video_count.toLocaleString() }</NavLink>
                </div>
                <OrderingMenu path={path} current={searchParams.order} />
            </div>
            <PhotoBoard id={boardId} path={path} page={searchParams.page} order={searchParams.order} tags={[tag.id]} />
        </div>
    )
}