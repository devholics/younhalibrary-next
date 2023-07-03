import { Suspense } from 'react'

import Banner from '../_components/banner'
import Navbar from '../_components/navbar'
import OrderingMenu from '../_components/ordering-menu'
import PhotoBoard from '../_components/photo-board'
import PhotoDisplay from "@/app/gallery/_components/photo-display";

export default function PhotoGallery({ searchParams }: {
    searchParams: {
        page?: string,
        order?: string
    }
}) {
    return (
        <main>
            <Banner />
            <div className="2xl:container px-6 mx-auto mt-3 md:my-4">
                <Navbar tab="photos" />
                <div className="flex justify-end my-3">
                    <OrderingMenu path="/gallery/photos" current={searchParams.order} />
                </div>
                <PhotoBoard key={`${searchParams.page}`} path="/gallery/photos" page={searchParams.page} order={searchParams.order} />
            </div>
        </main>
    )
}