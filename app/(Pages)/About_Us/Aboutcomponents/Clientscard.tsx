import React from 'react'
import '../About.css'


interface ClientscardProps {
    lnk: string;
    name: string;
    review: string;
    rate: number;
    totalrating: number;
}

const Clientscard: React.FC<ClientscardProps> = ({lnk,name,review,rate,totalrating}) => {
  return (
    <div className="client-div my-6">
                <div className="cl-div rounded overflow-hidden shadow-lg">
                    <div className="text-center p-6  border-b">
                    <img
                        className="h-20 w-20 rounded-full mx-auto mb-2"
                        src={lnk}
                        alt="Randy Robertson"
                    />
                    <p className="text-white text-xl font-extrabold font-['Manrope'] leading-tight mb-2">{name}</p>
                    <p className="self-stretch text-center text-indigo-200 text-base font-normal font-['Manrope'] leading-[17.71px]">{review}</p>
                    <div className="mt-5">
                        <a
                        href="#"
                        className="py-2 px-4 text-lg font-semibold text-indigo-200"
                        ><span className="text-white text-base font-extrabold font-['Manrope'] leading-tight">{rate}.0</span><span className="text-white text-[10px] font-extrabold font-['Manrope'] leading-tight">/{totalrating}.0 rating</span>
                        <span>    </span>
                            <span className="text-white text-base font-extrabold font-['Manrope'] leading-tight">
                            {[...Array(rate)].map((_, i) => (
                                    <span style={{color: 'gold'}}>&#9733;</span>
                                ))}
                        </span>
                        <span className="text-indigo-200 text-base font-extrabold font-['Manrope'] leading-tight">
                            {[...Array(totalrating - rate)].map((_, i) => (
                                    <span style={{color: 'grey'}}>&#9733;</span>
                                ))}
                        </span>
                        </a>
                    </div>
                    </div>   
                </div>
            </div>
  )
}

export default Clientscard