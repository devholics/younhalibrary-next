import { Suspense } from 'react'

import Navbar from "../_components/navbar";
import CreatorDisplay from './_components/creator-display'

export default function CreatorBoard() {
    return (
        <main>
            <div className="2xl:container px-3 mx-auto mt-3 md:my-4">
                <Navbar tab="creators" />
                <Suspense fallback={null}>
                    <CreatorDisplay />
                </Suspense>
            </div>
        </main>
    )
}