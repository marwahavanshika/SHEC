import Image from 'next/image';
import './About.css'

export default function AboutUs () {
    return (
        <>
            <div className="parent text-center">
                <Image src="/images/About_first.jpg" alt="head" width="1519"  height="0" className='head-image' />
            </div>

            <div className='img-text text-center'>
                <h3 text-bold text-center>you ask it</h3>
                <p text-center>we engineer it</p>
            </div>

            <div className="text ml-14">
                <br/>
                <br/>
                <br/>
                <br/>
                <br />
                <h3 className="font-bold text-5xl/[60px]">What we provide</h3>
                <br/>
                <p className="font-normal text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde tempora reiciendis quae vitae.</p>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>

        </>
   
    );
};