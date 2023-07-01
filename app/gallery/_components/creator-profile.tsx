import blankProfile from '@/public/blank-profile.png'
import Image from "next/image";

export default function CreatorProfile({ creator, className }: {
    creator: any,
    className?: string
}) {
    return creator.profile_img_url ?
        <img src={creator.profile_img_url} alt={creator.name} className={className} /> :
        <Image src={blankProfile} alt="Profile" className={className} />
}