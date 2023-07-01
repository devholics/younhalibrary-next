import React from "react";

export default function FlatPageLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <main>
            <div className="xl:container px-3 mx-auto mt-3 md:my-4">
                {children}
            </div>
        </main>
    )
}