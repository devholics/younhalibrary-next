import Banner from "@/app/gallery/_components/banner";
import NavLink from "@/app/gallery/_components/nav-link";
import Thumbnail from "@/app/gallery/_components/thumbnail";
import {CameraIcon, UserIcon, VideoCameraIcon} from "@heroicons/react/24/solid";
import Navbar from "@/app/gallery/_components/navbar";
import OrderingMenu from "@/app/gallery/_components/ordering-menu";
import React from "react";
import {getCreatorDetail} from "@/app/gallery/_lib/api";

export default async function CreatorVideoGallery({ params }: {
    params: {
        id: bigint
    }
}) {
    const path = `/gallery/creators/${params.id}`
    const creator = await getCreatorDetail(params.id)

    return (
        <div className="2xl:container px-6 mx-auto mt-6">
            <div className="flex my-3">
                <div className="flex text-slate-500 dark:text-slate-400 me-auto gap-2">
                    <NavLink href={path}><span className="font-semibold">사진</span> { creator.photo_count.toLocaleString() }</NavLink>
                    <NavLink href={`${path}/videos`} selected><span className="font-semibold">영상</span> { creator.video_count.toLocaleString() }</NavLink>
                </div>
            </div>
            <div className="text-center py-12">
                {/* TODO */}
                <h1 className="text-gray-500">준비 중입니다!</h1>
            </div>
        </div>
    )
}