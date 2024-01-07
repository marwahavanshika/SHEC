import React from 'react'
import '../blog.css'
import Image from 'next/image';


interface CategorycardProps {
    timeline: string;
    title: string;
    desc: string;
}

const Categorycard: React.FC<CategorycardProps> = ({timeline, title, desc}) => {
  return (
    <div>
      <div className=" ">
                <a href="#">
                    <Image  src="/images/category.jpg" alt="category" width="1519" height="0" />
                </a>
                <div className="p-5 pl-1">
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-500">{timeline}</p>
                    <a href="#">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">{title}</h5>
                    </a>
                    <p className="mb-3 text-xs font-normal text-gray-500 dark:text-gray-600">{desc}</p>
                    
                </div>
            </div>
    </div>
  )
}

export default Categorycard
