'use client'

import Link from 'next/link'

import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function getOrderingMessage(order?: string) {
    return order === "dateasc" ? "과거순" : "최신순"
}

export default function OrderingMenu({ path, params, current }: {
    path: string,
    params?: any,
    current?: string,
}) {
    const dateDescParams = new URLSearchParams(params)
    const dateAscParams = new URLSearchParams(params)

    dateAscParams.set('order', 'dateasc')

    return (
        <Menu as="div" className="relative inline-block text-left my-auto z-10">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-slate-400 dark:bg-black bg-opacity-20 dark:bg-opacity-20 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-200 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    { getOrderingMessage(current) }
                    <ChevronDownIcon
                        className="ml-2 -mr-1 h-5 w-5 text-slate-600 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-100"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-slate-600 rounded-md bg-white dark:bg-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={`${
                                        active ? 'bg-sky-500 dark:bg-sky-700 text-white' : 'text-gray-900 dark:text-slate-300'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    href={`${path}?${dateDescParams.toString()}`}
                                >
                                    최신순
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={`${
                                        active ? 'bg-sky-500 dark:bg-sky-700 text-white' : 'text-gray-900 dark:text-slate-300'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    href={`${path}?${dateAscParams.toString()}`}
                                >
                                    과거순
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                        <Menu.Item disabled>
                            {({ active }) => (
                                <span
                                    className={`${
                                        active ? 'bg-sky-500 dark:bg-sky-700 text-white' : 'text-gray-900 dark:text-slate-300'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    셔플 (지원 예정)
                                </span>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
