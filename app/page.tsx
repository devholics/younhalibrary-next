import Link from 'next/link'

import Banner from './_components/banner'

export default function Home() {
    return (
        <main>
            <Banner />
            <div className="xl:container px-3 mx-auto mt-3 md:my-4">
                <h3 className="mb-2">윤하도서관에 오신 것을 환영합니다!</h3>
                <p>윤하도서관은 윤하와 홀릭스의 발자취를 모아놓은 곳입니다. 자세한 이용 안내는 <Link href="/about" className="underline">여기</Link>에서 확인할 수 있습니다.</p>
            </div>
        </main>
    )
}
