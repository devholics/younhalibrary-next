import React from 'react'

import {CameraIcon, UserIcon, VideoCameraIcon} from "@heroicons/react/24/solid";

import NavLink from "./nav-link";

export default function Navbar({ tab = '' }: {
    tab?: string
}) {
    return (
        <div className="flex justify-center text-slate-500 dark:text-slate-400 mb-3 gap-3">
            <NavLink href="/gallery/photos" selected={tab === "photos"}><CameraIcon className="w-5 h-5 inline" /> Photos</NavLink>
            <NavLink href="/gallery/videos" selected={tab === "videos"}><VideoCameraIcon className="w-5 h-5 inline" /> Videos</NavLink>
            <NavLink href="/gallery/creators" selected={tab === "creators"}><UserIcon className="w-5 h-5 inline" /> Creators</NavLink>
        </div>
    )
}
