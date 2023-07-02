import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

export default function SearchBar({ placeholder = '', value = '' }: {
    placeholder?: string,
    value?: string
}) {
    return (
        <>
            <input type="text" name="q" placeholder={placeholder} defaultValue={value} autoComplete="off" className="h-full w-full outline-0 appearance-none bg-inherit focus:border-0" />
            <button type="submit">
                <MagnifyingGlassIcon className="h-1/2 inline-block my-auto -me-1" />
            </button>
        </>
    )
}