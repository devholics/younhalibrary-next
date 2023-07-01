'use client'

import React, {useState} from "react";

export default function PhotoViewer({ photo }: {
    photo: any
}) {
    const [zoomed, setZoom] = useState(false)
    const containerClass = `mt-5 ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`
    const imageClass = `${zoomed ? 'w-screen h-auto' : 'h-screen w-auto'} duration-150 mx-auto`
    const toggleZoom = () => {
        setZoom(!zoomed)
    }

    return (
        <div className={containerClass} onClick={toggleZoom}>
            <img className={imageClass} src={photo.url} alt="Photo" />
        </div>
    )
}
