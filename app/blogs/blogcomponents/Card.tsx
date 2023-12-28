import React from 'react'
import '../blog.css'


interface CardProps {
    title: string;
    desc: string;
}

const Card: React.FC<CardProps> = ({title, desc}) => {
  return (
    <div>
      <div className="max-w-sm ">
                <a href="#">
                    <img className="rounded-3xl" src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e.png" alt="" />
                </a>
                <div className="p-5 pl-1">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
                    <a href="#" className="blog-card inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
    </div>
  )
}

export default Card
