import Image from "next/image"

export default function Head() {
    return (
        <div className="text-center">
            <Image src="/head.jpg" alt="head" width="1519" height="0" className={'h-screen w-screen'} />
        </div>
    )
}
