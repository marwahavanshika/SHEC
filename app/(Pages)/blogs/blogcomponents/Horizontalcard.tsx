import React from 'react'
import '../blog.css'
import Image from 'next/image';


interface HorizontalcardProps {
    title: string;
    desc: string;
    type: string;
}

const Horizontalcard: React.FC<HorizontalcardProps> = ({title, desc, type}) => {
        const imgType = (type === "square") ? "hor-img": "rec-img";

  return (
        <div className="hor-card max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-32 sm:h-32 lg:h-auto  flex-none  rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                    <a href="#"> 
                       <Image  src="/images/horizontal.jpg" alt="Woman holding a mug" width="107" height="107" className={`object-cover ${imgType}`}/>
                    </a>
            </div>
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r pl-0 sm:p-0 sm:w-3/4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-light sm:font-semibold lg:font-bold text-xs sm:text-base lg:text-sm mb-2">
                            {title}
                        </div>
                        <p className="text-gray-700 text-[8px] sm:text-xs">
                            {desc}
                        </p>
                    </div>
                </div>
        </div>
  )
}

export default Horizontalcard
