import Link from 'next/link'

export default function Navbar ()  {
    return (
        <header className="text-gray-600 body-font sticky t-0 w-full z-10 bg-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href={'/'}>
                    <span className="ml-3 text-xl" >Tailblocks</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:border-b-2 hover:border-black" href={'/projects'}>Projects</Link>
                    <Link className="mr-5 hover:border-b-2 hover:border-black" href={'/blogs'}>Blogs</Link>
                    <Link className="mr-5 hover:border-b-2 hover:border-black" href={'/About_Us'}>About Us</Link>
                    <Link className="mr-5 hover:border-b-2 hover:border-black" href={'#'}>Fourth Link</Link>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                </button>
            </div>
        </header>
    )
}
