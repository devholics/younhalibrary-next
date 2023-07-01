import { Suspense } from 'react'

import Banner from '../_components/banner'
import Navbar from '../_components/navbar'
import OrderingMenu from '../_components/ordering-menu'
import PhotoDisplay from '../_components/photo-display'

function PhotoDisplayLoading() {
    return (
        <div className="text-center py-12">
            <h3>불러오는 중...</h3>
        </div>
    )
}

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
                <Suspense fallback={<PhotoDisplayLoading />}>
                    <PhotoDisplay path="/gallery/photos" page={searchParams.page} order={searchParams.order} />
                </Suspense>
            </div>
        </main>
    )
}