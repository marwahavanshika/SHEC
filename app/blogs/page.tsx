import Image from 'next/image';
import './blog.css'

export default function Blog () {
    return (
        <>
        <div className="text-center">
            <Image src="/head.jpg" alt="head" width="1519"  height="0" className='head-image' />
        </div>

        <div className='img-text text-center'>
            <h3 text-bold text-center>you ask it</h3>
            <p text-center>we build it</p>
        </div>
        </>
    );
}