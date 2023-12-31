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
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto  flex-none  rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                    <a href="#"> 
                       <Image  src="/images/horizontal.jpg" alt="Woman holding a mug" width="107" height="107" className={`object-cover ${imgType}`}/>
                    </a>
            </div>
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-sm mb-2">
                            {title}
                        </div>
                        <p className="text-gray-700 text-xs">
                            {desc}
                        </p>
                    </div>
                </div>
        </div>
  )
}

export default Horizontalcard
