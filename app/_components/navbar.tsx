import Link from 'next/link'

import Logo from './logo'

export default function Navbar() {
    return (
        <header className={`
            flex items-center flex-wrap justify-between
            lg:flex-nowrap lg:justify-start
            py-3
            bg-gradient-to-b
            from-yh-light
            to-[rgba(175,225,255,0.95)]
            dark:from-yh-dark
            dark:to-[rgba(4,113,177,0.95)]
            sticky top-0 z-50
            shadow-xl
            `}>
            <nav className="2xl:container px-3 mx-auto max-2xl:w-full flex items-center justify-between flex-wrap">
                {/* TODO: sidebar toggler */}
                <Link className="navbar-brand p-0 me-2 relative" href="/">
                    <div className="h-8">
                        <Logo className="fill-yh-dark dark:fill-yh-light" width={32} height={32} />
                    </div>
                </Link>
                <div className="grow">
                    <div className="overflow-y-visible flex p-0 text-[rgba(0,0,0,0.65)] dark:text-[rgba(255,255,255,0.65)]">
                        <ul className="flex ps-0 mb-0 list-none flex-row flex-wrap">
                            <li>
                                <Link href="/about" className="p-2 block">소개</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="p-2 block">갤러리</Link>
                            </li>
                            <li>
                                <Link href="/calendar" className="p-2 block">캘린더</Link>
                            </li>
                        </ul>
                        <ul className="flex ps-0 mb-0 list-none flex-wrap ms-auto">
                            <li className="my-auto">
                                <a className="p-2 block" href="https://twitter.com/YounhaLibrary" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}