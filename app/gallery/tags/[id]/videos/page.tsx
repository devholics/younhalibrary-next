import { getTagDetail } from '../../../_lib/api'
import NavLink from "@/app/gallery/_components/nav-link";
import OrderingMenu from "@/app/gallery/_components/ordering-menu";

export default async function TagVideoGallery({ params, searchParams }: {
    params: {
        id: bigint
    },
    searchParams: {
        page?: string,
        order?: string
    }
}) {
    const path = `/gallery/tags/${params.id}`
    const tag = await getTagDetail(params.id)

    return (
        <div className="2xl:container px-6 mx-auto mt-6">
            <div className="flex my-3">
                <div className="flex text-slate-500 dark:text-slate-400 me-auto gap-2">
                    <NavLink href={path}><span className="font-semibold">사진</span> { tag.photo_count.toLocaleString() }</NavLink>
                    <NavLink href={`${path}/videos`} selected><span className="font-semibold">영상</span> { tag.video_count.toLocaleString() }</NavLink>
                </div>
                <OrderingMenu path={path} current={searchParams.order} />
            </div>
            <div className="text-center py-12">
                {/* TODO */}
                <h1 className="text-gray-500">준비 중입니다!</h1>
            </div>
        </div>
    )
}