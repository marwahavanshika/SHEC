import Image from 'next/image';
import './About.css'
import Licencecard from "./Aboutcomponents/Licencecard";
import Clientscard from './Aboutcomponents/Clientscard';

const licence = [{
    imgLink: "/images/licence1.jpg",
    licenceTitle: "Directorate General of Dubai Civil Defence",
    licenceDesc: "E-services",
    licenceTimeline:"2019"
    },
    {
        imgLink: "/images/licence2.jpg",
        licenceTitle: "Consultant Details Information",
        licenceDesc: "Silver Heights Engineering Consultants",
        licenceTimeline:"2019"
    },
    {
        imgLink: "/images/licence3.jpg",
        licenceTitle: "Silver Heights Industry",
        licenceDesc: "E-services",
        licenceTimeline:"2019"
    },
    {
        imgLink: "/images/licence4.jpg",
        licenceTitle: "Architecture CEO, Silver Heights",
        licenceDesc: "Silver Heights Construction Ltd",
        licenceTimeline:"2019"
    }
]

const clients = [{
    imgLink: "https://randomuser.me/api/portraits/men/24.jpg",
    clientName: "Randy Robertson",
    clientReview: "Sapiente occaecati exercitationem quasi eum corporis sit. Aut consectetur maxime debitis quam voluptatem aut consequatur voluptatum.",
    clientRate: 5,
    ClientTotalrating: 5,
    },
    {
        imgLink: "https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        clientName: "Letcia Kutch",
        clientReview: "Sapiente occaecati exercitationem quasi eum corporis sit. Aut consectetur maxime debitis quam voluptatem aut consequatur voluptatum.",
        clientRate: 4,
        ClientTotalrating: 5,
    },
    {
        imgLink: "https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200",
        clientName: "Randy Robertson",
        clientReview: "Sapiente occaecati exercitationem quasi eum corporis sit. Aut consectetur maxime debitis quam voluptatem aut consequatur voluptatum.",
        clientRate: 5,
        ClientTotalrating: 5,
    },
    {
        imgLink: "/images/cl-jeet.jpg",
        clientName: "Mohd. Jeetraj Ali",
        clientReview: "My house is now lakh times better than 7 star hotel. Maldives and Lakshadweep has no comparison before my house.I am very rich now.",
        clientRate: 5,
        ClientTotalrating: 5,
    },
    {
        imgLink: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg",
        clientName: "Randy Robertson",
        clientReview: "Sapiente occaecati exercitationem quasi eum corporis sit. Aut consectetur maxime debitis quam voluptatem aut consequatur voluptatum.",
        clientRate: 4,
        ClientTotalrating: 5,
    },
    {
        imgLink: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg",
        clientName: "Randy Robertson",
        clientReview: "Sapiente occaecati exercitationem quasi eum corporis sit. Aut consectetur maxime debitis quam voluptatem aut consequatur voluptatum.",
        clientRate: 4,
        ClientTotalrating: 5,
    }
]

export default function AboutUs () {
    return (
        <>
            <div className="parent text-center">
                <Image src="/images/About_first.jpg" alt="head" width="1519"  height="0" className='head-image w-full' />
            </div>

            <div className='img-text text-center'>
                <h3 text-bold text-center>you ask it</h3>
                <p text-center>we engineer it</p>
            </div>

            <div className="what text ml-6 md:ml-14 mb-20">
                <br/>
                <br/>
                <br/>
                <br/>
                <br />
                <h3 className="font-bold lg:font-[600px] xl:font-bold text-3xl/[60px] md:text-4xl/[30px] lg:text-4xl/[30px] xl:text-5xl/[60px] mb-2 md:mb-4 lg:mb-4 xl:mb-6">What we provide</h3>
                <p className="font-normal text-sm md:text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde tempora reiciendis quae vitae.</p>
            </div>

            <div className='provide  md:w-[85%] ml-[50px] lg:mr-[55px] xl:mr-[0px] flex flex-1 lg:w-[90%] gap-x-8 mb-20 md:mb-16 lg:mb-36 '>
                <div className="parent text-center">
                    <Image src="/images/bldg1.jpg" alt="bldg1"   width="367" height="0" className='about-image1 cursor-pointer' />
                </div>
                <div className="parent text-center">
                    <Image src="/images/bldg2.jpg" alt="bldg2" width="367"  height="0" className='about-image2 cursor-pointer' />
                </div>
                <div className="parent text-center">
                    <Image src="/images/bldg3.jpg" alt="bldg3" width="367"  height="0" className='about-image3 cursor-pointer' />
                </div>
            </div>

            <div className='Licence flex flex-1 gap-x-8 mb-4 md:mb-24 w-full lg:w-[95%] xl:w-full'>
                <div className='ml-[20px] md:ml-[15px] lg:ml-[0px] mb-4 md:mb-0'> 
                    <p className='font-bold text-3xl/[57px] md:text-4xl/[57px]  lg:text-4xl/[57px] xl:text-5xl/[57px] ml-10'>Licences</p>
                </div>
                <div className='licence-container pl-[18px] md:pl-4 lg:pl-8 xl:pl-8 grid grid-cols-2 ml-10 gap-x-20 md:gap-x-0 lg:gap-x-20 xl:gap-x-20'>
                                {licence.map(licence => (
                                    <Licencecard
                                    lnk={licence.imgLink} 
                                    title={licence.licenceTitle}
                                    desc={licence.licenceDesc}
                                    timeline={licence.licenceTimeline}
                                    />
                                ))
                                }
                </div>
            </div>

            <div>
                <p className='font-bold text-3xl/[30px] md:text-4xl/[30px] lg:text-4xl/[30px] xl:text-5xl/[30px] ml-16 md:ml-14 lg:ml-14 xl:ml-[170px] mb-8 md:mb-8 lg:mb-16 justify-center'>Certifications</p>
                <div className='certi md:ml-14 lg:ml-[118px] xl:ml-14 flex flex-1 md:w-[85%] lg:w-[80%] xl:w-[90%] gap-x-8 lg:gap-0 xl:gap-x-8 mb-20 md:mb-16 lg:mb-36 justify-center'>
                    <div className="cer text-center">
                        <Image src="/images/certificate1.jpg" alt="bldg1"  className='about-image1 w-[337px] lg:w-[290px] xl:w-[337px] mb-4 md:mb-8 cursor-pointer' width="337"  height="0" />
                        <div className='w-80'>
                            <p className=' text-center font-semibold text-sm text-[#1B4896] mr-[45px] md:mr-[0px] lg:mr-[25px] xl:mr-[0px]'>
                            QUALITY MANAGEMENT SYSTEM CERTIFICATE OF APPROVAL
                            </p>
                        </div>
                    </div>
                    <div className="cer text-center">
                        <Image src="/images/certificate2.jpg" alt="bldg2" className='about-image2 w-[337px] lg:w-[290px] xl:w-[337px] mb-4 md:mb-8 cursor-pointer' width="337"  height="0"/>
                        <div className='w-80'>
                            <p className=' text-center font-semibold text-sm text-[#1B4896] mr-[40px] md:mr-[0px] lg:mr-[25px] xl:mr-[0px]'>
                            ENVIRONMENTAL MANAGEMENT SYSTEM CERTIFICATE OF APPROVAL
                            </p>
                        </div>
                    </div>
                    <div className="cer text-center ">
                        <Image src="/images/certificate3.jpg" alt="bldg3"  className='about-image3 w-[337px] lg:w-[290px] xl:w-[337px] mb-4 md:mb-8 cursor-pointer' width="337"  height="0"/>
                        <div className='w-80'>
                            <p className=' text-center font-semibold text-sm text-[#1B4896] mr-[45px] md:mr-[0px] lg:mr-[15px] xl:mr-[0px]'>
                            OCCUPATIONAL HEALTH AND SAFETY MANAGEMENT SYSTEM CERTIFICATE OF APPROVAL
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full lg:w-[100%] xl:w-[80%] mb-20 md:mb-16 lg:mb-24 xl:mb-36'>
                <div className='justify-center'>
                    <p className='font-semibold md:font-bold text-3xl/[30px] lg:text-4xl/[30px] xl:text-5xl/[30px] ml-16 md:ml-20 lg:ml-14 xl:ml-[270px] mb-[-10px] md:mb-[-10px] lg:mb-0 xl:mb-8'>Client Reviews</p>
                </div>                    
                <div className='clients-container p-8'>
                        {clients.map(clients => (
                            <Clientscard 
                                lnk={clients.imgLink}
                                name={clients.clientName}
                                review={clients.clientReview}
                                rate={clients.clientRate}
                                totalrating={clients.ClientTotalrating}
                            />
                        ))
                        }
                    </div>
            </div>

            <div className='ceo-main flex justify-center'>
                <div className="ceo-card max-w-md w-full lg:max-w-full lg:flex md:mb-20 lg:mb-16 xl:mb-12">
                        <div className="ceo-img-div flex-none text-center overflow-hidden rounded-bl-3xl mb-4 md:mb-0" title="Woman holding a mug">
                            <a href="#"> 
                            <img  src="/images/ceo.jpg" alt="ceo image"  className="ceo-img w-[311px] md:w-[280px] lg:w-[360px] h-[320px] md:h-[390px] lg:h-[450px]"/>
                            </a>
                        </div>
                        <div className="ceo-thought bg-white rounded-b pl-[10px] sm:pl-[0px] sm:p-20 md:p-8 lg:p-20 flex flex-col justify-between leading-normal rounded-br-3xl">
                            <div className="mb-10">
                                <div className="text-gray-900 font-bold text-xl/[46px] md:text-xl/[46px] lg:text-3xl/[46px] mb-2 md:mb-6">
                                Hear What our ceo says
                                </div>
                                <p className="text-gray-700 font-normal text-[12px]/[38px] md:text-sm/[38px] lg:text-base/[38px] mb-6 md:mb-10">
                                Silver Heights, a premier UAE consulting firm since 2016, pioneers engineering and architecture, delivering world-class design and project management, transforming visions into reality with quality service
                                </p>
                                <p className='font-bold text-lg/[14px]'>Al Shaikh Zayed</p>
                            </div>
                        </div>
                    </div>
                </div>

            </>
   
    );
};