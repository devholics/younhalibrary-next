import Image from "next/image";

import wallPaper from "@/public/gallerybanner.jpg";

import SearchBar from './search-bar'

export default function Banner() {
    return (
        <div className="relative overflow-hidden h-96">
            <Image className="object-cover h-full w-full" src={wallPaper} alt="Wallpaper" priority />
            <div className="absolute flex inset-0 justify-center items-center">
                <div className="text-white w-10/12 md:w-4/6 lg:w-1/2">
                    <h1 className="font-bold mb-2">갤러리</h1>
                    <p className="mb-2">갤러리에서 원하는 사진을 찾아보세요.</p>
                    <form method="get" action="/gallery/search">
                        <div className="flex bg-slate-200 text-slate-800 w-full h-12 rounded-xl px-4 outline outline-0 outline-offset-1 outline-slate-300 focus-within:outline-1">
                            <SearchBar placeholder="연말콘" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="absolute text-slate-500 text-xs bottom-2 left-2">
                <a href="https://holics-leetro.tistory.com/135" className="hover:text-slate-400" target="_blank">[23.03.12] 앵콜 콘서트〈c/2023YH〉</a>
                {' '}
                by Leetro,
                {' '}
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko" className="hover:text-slate-400"
                   target="_blank">CC BY-NC-SA 4.0</a>
            </div>
        </div>
    )
}