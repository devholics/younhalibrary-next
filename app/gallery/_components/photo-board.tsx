import PhotoDisplay, { PhotoDisplayProps } from './photo-display'
import {Suspense} from "react";

function PhotoDisplayLoading() {
    return (
        <div className="text-center py-12">
            <h3>불러오는 중...</h3>
        </div>
    )
}

export default function PhotoBoard(props: PhotoDisplayProps) {
    return (
        <Suspense key={`${props.order}-${props.page}`} fallback={<PhotoDisplayLoading />}>
            <PhotoDisplay {...props} />
        </Suspense>
    )
}