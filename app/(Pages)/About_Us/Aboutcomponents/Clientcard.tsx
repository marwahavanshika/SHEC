import React from 'react'
import '../About.css'


interface ClientcardProps {
    lnk: string;
}

const Clientcard: React.FC<ClientcardProps> = ({lnk}) => {
  return (
    <div className='w-11/12'>
            <div className="  ">
                <a href="#">
                    <img className="rounded-2xl object-cover h-[210px] sm:h-[160px] md:h-[300px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] w-full" src={lnk} alt="" />
                </a>
            </div>
    </div>
  )
}

export default Clientcard
