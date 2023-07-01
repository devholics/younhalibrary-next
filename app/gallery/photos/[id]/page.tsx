import { notFound } from 'next/navigation'

import { getPhotoDetail } from '../../_lib/api'

import { LinkIcon, CalendarIcon } from '@heroicons/react/20/solid'

import CreatorProfile from '../../_components/creator-profile'
import Tag from '../../_components/tag'
import Link from "next/link";
import React from "react";

import LicenseDialog from './_components/license-dialog'

export default async function PhotoDetail({ params }: {
    params: {
        id: bigint
    }
}) {
    const photo = await getPhotoDetail(params.id)
    const date = new Date(photo.date)

    if (!photo) {
        notFound()
    }

    return (
        <main>
            <div className="2xl:container mx-auto mt-5 px-6 flex">
                <Link href={`/gallery/creators/${photo.creator.id}`} className="my-auto">
                    <div
                        className="rounded-full ring-1 ring-slate-300 dark:ring-slate-700
                                   bg-slate-600 overflow-clip w-12 h-12"
                    >
                        <CreatorProfile creator={photo.creator} className="w-full h-full" />
                    </div>
                </Link>
                <div className="text-lg my-auto mx-3 text-slate-700 dark:text-slate-200">
                    <h3><Link href={`/gallery/creators/${photo.creator.id}`}>{ photo.creator.name }</Link></h3>
                </div>
            </div>
            <div className="mt-5">
                <img className="max-h-[calc(100vh-64px)] mx-auto" src={photo.url} alt="Photo" />
            </div>
            <div className="2xl:container mx-auto mt-5 px-6 flex text-slate-600 dark:text-slate-400">
                <LicenseDisplay license={photo.license} />
                <div className="ms-auto">
                    <a
                        href={photo.source.url}
                        target="_blank"
                        className="rounded-lg border p-2 border-slate-300 dark:border-slate-600 hover:border-slate-400"
                    >
                        <LinkIcon className="h-5 w-5 inline-block my-auto" /> 출처
                    </a>
                </div>
            </div>
            <div className="2xl:container mx-auto mt-6 px-6">
                <div className="mb-3 flex items-center">
                    <CalendarIcon className="w-5 h-5 inline-block me-1" />
                    <span>{ date.toLocaleDateString('ko-KR') }</span>
                </div>
                <div className="flex gap-2">
                    { photo.tags.map((tag: any) => <Tag key={tag.id} tag={tag} />) }
                </div>
            </div>
        </main>
    )
}

function LicenseDisplay({ license }: {
    license: any
}) {
    if (license.display) {
        if (license.type === 'CC') {
            return (
                <div className="text-sm flex items-center gap-1">
                    <CreativeCommonsIcon /> <a href={ license.url || '#' } target="_blank">{ license.name }</a>
                </div>
            )
        } else {
            return (
                <LicenseDialog title={license.name}>
                    <p className="text-sm whitespace-pre-wrap text-gray-500">
                        {license.description}
                    </p>
                </LicenseDialog>
            )
        }
    } else {
        return (
            <LicenseDialog title="윤하도서관 라이선스">
                <p className="text-sm text-gray-500">
                    <span className="font-bold">별도 라이선스 표기가 되어있지 않아도 윤하도서관의 미디어는 저작권의 보호를 받고 있습니다.</span>
                    {' '} 저작권은 윤하도서관이 아닌 크리에이터 분들께 있으므로, 사진을 활용하기 전에는 크리에이터 분들께 문의해 주시기 바랍니다.
                </p>
            </LicenseDialog>
        )
    }
}

function CreativeCommonsIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cc-circle"
             viewBox="0 0 16 16">
            <path
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.408 5.89c-.83 0-1.318.64-1.318 1.753v.742c0 1.108.479 1.727 1.318 1.727.69 0 1.138-.435 1.187-1.05h1.147v.114c-.058 1.147-1.029 1.938-2.343 1.938-1.612 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.319 0 2.29.812 2.343 1.999v.11H6.595c-.049-.638-.506-1.108-1.187-1.108Zm5.404 0c-.831 0-1.319.64-1.319 1.753v.742c0 1.108.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05h1.147v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.75 2.518-2.75 1.318 0 2.29.812 2.342 1.999v.11h-1.147c-.048-.638-.505-1.108-1.186-1.108Z"/>
        </svg>
    )
}
