import Banner from '../_components/banner'
import Navbar from '../_components/navbar'
import OrderingMenu from '../_components/ordering-menu'
import PhotoBoard from '../_components/photo-board'

export default function PhotoGallery({ searchParams }: {
    searchParams: {
        page?: string,
        order?: string
    }
}) {
    const order = searchParams.order
    const page = searchParams.page
    const boardId = `gallery-${order || 'default'}-${page || 1}`

    return (
        <main>
            <Banner />
            <div className="2xl:container px-6 mx-auto mt-3 md:my-4">
                <Navbar tab="photos" />
                <div className="flex justify-end my-3">
                    <OrderingMenu path="/gallery/photos" current={order} />
                </div>
                <PhotoBoard id={boardId} path="/gallery/photos" page={page} order={order} />
            </div>
        </main>
    )
}