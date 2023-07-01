import Link from 'next/link'

import Logo from './logo'

export default function Footer() {
    return (
        <footer className="py-4 md:py-5 mt-5 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
            <div className="container mx-auto py-4 md:py-5 px-4 md:px-3">
                <Link className="mb-2 inline-flex items-center" href="/">
                    <Logo className="fill-current" width={32} height={32} />
                    <span className="ms-2 font-semibold text-xl">Younha Library</span>
                </Link>
                <ul className="list-none text-sm">
                    <li className="mb-2">Developed by <a href="https://github.com/devholics" className="underline" target="_blank">DevHolics</a></li>
                    <li className="mb-2">Photos and Videos by individual <Link href="/gallery/creators" className="underline">Creators</Link></li>
                    <li className="mb-2">이 사이트는 수익을 창출하지 않는 개인 프로젝트이며 C9 엔터테인먼트로부터 승인이나 지원을 받고 있지 않습니다.</li>
                </ul>
            </div>
        </footer>
    )
}