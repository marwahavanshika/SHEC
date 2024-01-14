import React from 'react'
import '../About.css'
import Image from 'next/image';


interface LicencecardProps {
    lnk: string;
    title: string;
    desc: string;
    timeline: string;
}

const Licencecard: React.FC<LicencecardProps> = ({lnk,title, desc,timeline}) => {
  return (
    <div>
    <div className=" ">
              <a href="#">
                  <Image  src={lnk} alt="category" width="299" height="0" />
              </a>
              <div className="p-5 pl-0  w-72">
                  <a href="#">
                      <h5 className="mb-8 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-900">{title}</h5>
                  </a>
                  <p className="mb-5 text-base font-medium text-gray-500 dark:text-gray-400">{desc}</p>
                  <p className="mb-8 text-base font-medium text-gray-700 dark:text-gray-400">{timeline}</p>
              </div>
          </div>
  </div>
  )
}

export default Licencecard
