import Link from 'next/link'

export default function Tag({ tag }: {
    tag: any
}) {
    return (
        <Link
            href={`/gallery/tags/${tag.id}`}
            className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-500 hover:bg-sky-100
                       dark:bg-slate-600 dark:text-slate-400 dark:hover:bg-sky-800 inline-block"
        >
            { tag.name }
        </Link>
    )
}