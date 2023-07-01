import Image from 'next/image'

import notFoundImage from '../public/mollu.jpg'

export default function NotFound() {
    return (
        <div className="text-center py-12">
            <h1>404</h1>
            <h2>Not found</h2>
            <Image src={notFoundImage} alt="Not found" className="mx-auto mt-5 w-80 h-80" />
        </div>
    )
}