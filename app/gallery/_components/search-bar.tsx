'use client'

import React from 'react'

import { useRouter } from 'next/navigation'

import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

interface SearchFormControlsCollection extends HTMLFormControlsCollection {
    query: HTMLInputElement
}

interface SearchFormElement extends HTMLFormElement {
    readonly elements: SearchFormControlsCollection
}

export default function SearchBar({ placeholder = '', value = '', className = '' }: {
    placeholder?: string,
    value?: string,
    className?: string
}) {
    const router = useRouter()

    function handleSubmit(e: React.FormEvent<SearchFormElement>) {
        e.preventDefault()

        const query = e.currentTarget.elements.query.value

        router.push(`/gallery/search?q=${query}`)
    }

    return (
        <form method="get" onSubmit={handleSubmit}>
            <div className={className}>
                <input type="text" name="query" placeholder={placeholder} defaultValue={value} autoComplete="off" className="h-full w-full outline-0 appearance-none bg-inherit focus:border-0" />
                <button type="submit">
                    <MagnifyingGlassIcon className="h-1/2 inline-block my-auto -me-1" />
                </button>
            </div>
        </form>
    )
}