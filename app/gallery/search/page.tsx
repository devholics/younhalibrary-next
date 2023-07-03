import { PhotoFilter } from '../_lib/api'
import Navbar from "@/app/gallery/_components/navbar";
import OrderingMenu from "@/app/gallery/_components/ordering-menu";
import React, {Suspense} from "react";
import PhotoBoard from "@/app/gallery/_components/photo-board";
import NavLink from "@/app/gallery/_components/nav-link";

import SearchBar from '../_components/search-bar'

export default function GallerySearch({ searchParams }: {
    searchParams: {
        page?: string,
        order?: string,
        q?: string
    }
}) {
    const query = searchParams.q || ''
    const filter = parseQuery(query)
    const path = '/gallery/search'

    return (
        <main>
            <div className="2xl:container mx-auto px-6 mt-5">
                <form method="get" action="/gallery/search">
                    <div className="flex bg-white dark:bg-slate-700 border dark:border-none text-slate-800 dark:text-slate-200 w-full lg:w-4/6 h-12 rounded-xl px-4 outline outline-0 outline-offset-1 outline-slate-300 focus-within:outline-1">
                        <SearchBar placeholder="연말콘" value={query} />
                    </div>
                </form>
                <h1 className="my-3">&quot;{query}&quot; 검색 결과</h1>
            </div>
            <div className="2xl:container px-6 mx-auto mt-3 md:my-4">
                <div className="flex justify-end my-3">
                    <OrderingMenu path={path} params={{q: query}} current={searchParams.order} />
                </div>
                <PhotoBoard path={path} params={{q: query}} page={searchParams.page} order={searchParams.order} {...filter} />
            </div>
        </main>
    )
}

function parseQuery(query: string) {
    const tokens = query.split(' ')
    const searchTokens: string[] = []
    const filter: PhotoFilter = {}

    for (const token of tokens) {
        if (token.startsWith('creator:')) {
            filter.creatorId = token.substring(8)
        } else if (token.startsWith('tag:')) {
            filter.tags ??= []
            filter.tags.push(token.substring(4))
        } else if (token.startsWith('since:')) {
            filter.startDate = token.substring(6)
        } else if (token.startsWith('until:')) {
            filter.endDate = token.substring(6)
        } else {
            searchTokens.push(token)
        }
    }
    filter.search = searchTokens.join(' ')
    return filter
}
