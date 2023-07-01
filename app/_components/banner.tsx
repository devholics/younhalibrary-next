import Image from "next/image";
import wallPaper from "../../public/c2022yh.jpg";
import logo from "../../public/yl_logo.svg";

export default function Banner() {
    return (
        <div className="yh-wallpaper relative overflow-hidden h-96">
            <Image className="object-cover h-full w-full" src={wallPaper} alt="Wallpaper" priority />
            <div className="yh-welcome absolute flex flex-col pt-12 inset-0">
                <Image src={logo} alt="YHLibrary Logo"
                       className="yh-logo block mx-auto mb-3 w-20 md:w-24 xl:w-36" />
                <h1 className="text-white text-center lh-1 mb-3 md:max-lg:text-5xl lg:text-6xl">𝐘𝐨𝐮𝐧𝐡𝐚
                    𝐋𝐢𝐛𝐫𝐚𝐫𝐲</h1>
                <h5 className="text-white text-center max-md:hidden">윤하와 홀릭스의 기록 보관소</h5>
            </div>
            <div className="absolute text-slate-500 text-xs bottom-2 left-2">
                <a href="https://holics-leetro.tistory.com/129" className="hover:text-slate-400" target="_blank">[22.12.02] 연말
                    콘서트〈c/2022YH〉</a>
                {' '}
                by Leetro,
                {' '}
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko" className="hover:text-slate-400"
                   target="_blank">CC BY-NC-SA 4.0</a>
            </div>
        </div>
    )
}