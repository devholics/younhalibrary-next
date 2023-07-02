'use client'

import Image, { ImageLoaderProps } from 'next/image'

const SUPPORTED_SIZES = [
    16, 40, 48, 50, 60, 70, 80, 90, 100, 110, 120, 128, 130, 140, 150, 160, 170,
    180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300,
    320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440,
    450, 460, 480, 500, 520, 540, 550, 560, 570, 580, 600, 620, 640,
    660, 680, 700, 720, 750, 760, 800, 820, 860, 890, 900, 920, 930,
    960, 1000, 1050, 1080, 1200, 1240, 1280
]

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    for (const size of SUPPORTED_SIZES) {
        if (size >= width) {
            const params = new URLSearchParams({ fname: src })
            return `https://img1.daumcdn.net/thumb/R${size}x0/?${params}`
        }
    }
    return src
}

export default function ThumbnailImage({ photo }: {
    photo: any
}) {
    return (
        <Image
            loader={imageLoader}
            src={photo.url}
            alt="Photo"
            width={photo.width || 0}
            height={photo.height || 0}
            sizes="(min-width: 1280px) calc(calc(100vw - 96px) / 4),
                   (min-width: 768px) calc(calc(100vw - 80px) / 3),
                   (min-width: 640px) calc(calc(100vw - 64px) / 2),
                   calc(100vw - 48px)"
        />
    )
}
