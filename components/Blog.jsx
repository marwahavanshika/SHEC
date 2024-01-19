import Image from 'next/image'
import Link from 'next/link'


const Card = ({ title='Dummy title', desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus modi fugit quam corporis aspernatur odio nisi ab eligendi veniam officia, unde architecto illum, voluptatem et vitae vel sunt",className }) => {
    return (
        <div className={className}>
            <div className=" w-[350px] shrink min-w-60 ">
                <a href="#">
                    <Image width={1000} height={1000} className="rounded-3xl w-full h-full" src={'/head.jpg'} alt="" />
                </a>
                <div className="p-5 pl-1">
                    <Link href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 ">{desc}</p>
                    <Link href="/blogs" className=" h-10 w-10 relative left-80 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover: focus:ring-4 focus:outline-none focus:ring-blue-300 ">

                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
