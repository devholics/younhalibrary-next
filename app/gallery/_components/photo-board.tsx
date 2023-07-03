import PhotoDisplay, { PhotoDisplayProps } from './photo-display'
import {Suspense} from "react";

function PhotoDisplayLoading() {
    return (
        <div className="text-center py-12">
            <h3>불러오는 중...</h3>
        </div>
    )
}

interface PhotoBoardProps extends PhotoDisplayProps {
    id: string
}

export default function PhotoBoard({ id, ...props }: PhotoBoardProps) {
    return (
        // Reset Suspense boundary on navigation; otherwise severe CLS occurs
        <Suspense key={id} fallback={<PhotoDisplayLoading />}>
            <PhotoDisplay {...props} />
        </Suspense>
    )
}