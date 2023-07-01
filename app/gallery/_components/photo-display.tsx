import { notFound } from 'next/navigation'

import { getPhotoList, PhotoFilter } from '../_lib/api'
import Thumbnail from "@/app/gallery/_components/thumbnail";
import Link from "next/link";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";

function getOrdering(order?: string) {
    if (order === "dateasc") {
        return "date,id"
    }
    return ""
}

interface PhotoDisplayProps extends PhotoFilter {
    path: string,
    params?: any,
    page?: string,
    order?: string
}

export default async function PhotoDisplay({ path, params, page, order, ...filter }: PhotoDisplayProps) {
    const ordering = getOrdering(order)
    const photoList = await getPhotoList(page, ordering, filter)
    const baseParams = new URLSearchParams(params)

    if (order) {
        baseParams.set('order', order)
    }
    const previousPageParams = new URLSearchParams(baseParams)
    const nextPageParams = new URLSearchParams(baseParams)

    if (!photoList) {
        notFound()
    }

    if (photoList.previous) {
        previousPageParams.set('page', photoList.previous.page)
    }
    if (photoList.next) {
        nextPageParams.set('page', photoList.next.page)
    }

    return (
        <>
            <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4">
                { photoList.results.map((photo: any) => <Thumbnail key={photo.id} photo={photo} />) }
            </div>
            <div className="flex justify-center mt-4">
                { photoList.previous ?
                    <Link
                        href={`${path}?${previousPageParams.toString()}`}
                        className="h-10 w-10 rounded-full hover:bg-slate-300/20 inline-flex items-center justify-center"
                    >
                        <ChevronLeftIcon className="h-4 w-4" />
                    </Link> :
                    <div className="h-10 w-10"></div>
                }
                <p className="my-auto text-sm text-slate-500 dark:text-slate-400 mx-3">
                    { photoList.page } / { photoList.pages }
                </p>
                { photoList.next ?
                    <Link
                        href={`${path}?${nextPageParams.toString()}`}
                        className="h-10 w-10 rounded-full hover:bg-slate-300/20 inline-flex items-center justify-center"
                    >
                        <ChevronRightIcon className="h-4 w-4" />
                    </Link> :
                    <div className="h-10 w-10"></div>
                }
            </div>
        </>
    )
}