export default function Calendar() {
    return (
        <>
            <h1 className="mb-2">Y.HOLICS 캘린더</h1>
            <p className="mb-2"><a href="https://twitter.com/0123_YH/status/1567542909960073218">0123</a>님께서 만드신 홀릭스 캘린더입니다.</p>
            <div className="relative w-full aspect-video">
                <iframe
                    className="absolute w-full h-full top-0 left-0"
                    src="https://calendar.google.com/calendar/embed?src=objaogbb0fhdk365cok11n37i0%40group.calendar.google.com&ctz=Asia%2FSeoul"
                    width="800" height="600"></iframe>
            </div>
        </>
    )
}