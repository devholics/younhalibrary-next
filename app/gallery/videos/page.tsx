import Banner from "@/app/gallery/_components/banner";
import NavLink from "@/app/gallery/_components/nav-link";
import Thumbnail from "@/app/gallery/_components/thumbnail";
import {CameraIcon, UserIcon, VideoCameraIcon} from "@heroicons/react/24/solid";
import Navbar from "@/app/gallery/_components/navbar";

export default function VideoGallery() {
    return (
        <main>
            <Banner />
            <div className="2xl:container px-3 mx-auto mt-3 md:my-4">
                <Navbar tab="videos" />
                <div className="flex justify-end">
                </div>
                <div className="text-center py-12">
                    {/* TODO */}
                    <h1 className="text-gray-500">준비 중입니다!</h1>
                </div>
            </div>
        </main>
    )
}