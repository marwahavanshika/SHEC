import Image from 'next/image';
import './About.css'
import Licencecard from "./Aboutcomponents/Licencecard";

const licence = [{
    licenceTitle: "Directorate General of Dubai Civil Defence",
    licenceDesc: "E-services",
    licenceTimeline:"2019"
    },
    {
        licenceTitle: "Directorate General of Dubai Civil Defence",
        licenceDesc: "E-services",
        licenceTimeline:"2019"
    },
    {
        licenceTitle: "Directorate General of Dubai Civil Defence",
        licenceDesc: "E-services",
        licenceTimeline:"2019"
    },
    {
        licenceTitle: "Directorate General of Dubai Civil Defence",
        licenceDesc: "E-services",
        licenceTimeline:"2019"
    }
]

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
                <h3 className="font-bold lg:font-[600px] xl:font-bold text-5xl/[60px] lg:text-4xl/[30px] xl:text-5xl/[60px]">What we provide</h3>
                <br/>
                <p className="font-normal text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde tempora reiciendis quae vitae.</p>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>

            <div className='ml-14 lg:mr-[55px] xl:mr-[0px] flex flex-1 gap-x-8 mb-36'>
                <div className="parent text-center">
                    <Image src="/images/bldg1.jpg" alt="bldg1"   width="367" height="0" className='about-image1' />
                </div>
                <div className="parent text-center">
                    <Image src="/images/bldg2.jpg" alt="bldg2" width="367"  height="0" className='about-image2' />
                </div>
                <div className="parent text-center">
                    <Image src="/images/bldg3.jpg" alt="bldg3" width="367"  height="0" className='about-image3' />
                </div>
            </div>

            <div className='Licence flex flex-1 gap-x-8 mb-24 w-full lg:w-[95%] xl:w-full'>
                <p className='font-bold text-5xl/[57px] md:text-4xl/[57px]  lg:text-4xl/[57px] xl:text-5xl/[57px] ml-10'>Licences</p>
                <div className='licence-container pl-8 md:pl-4 lg:pl-8 xl:pl-8 grid grid-cols-2 ml-10 gap-x-20 md:gap-x-8 lg:gap-x-20 xl:gap-x-20'>
                                {licence.map(licence => (
                                    <Licencecard 
                                    title={licence.licenceTitle}
                                    desc={licence.licenceDesc}
                                    timeline={licence.licenceTimeline}
                                    />
                                ))
                                }
                    </div>
            </div>

            <div>
                <p className='font-bold text-5xl/[30px] lg:text-4xl/[30px] xl:text-5xl/[30px] ml-56 lg:ml-14 xl:ml-[168px] mb-16 justify-center'>Certifications</p>
                <div className='certi ml-14 lg:ml-[118px] xl:ml-14 flex flex-1 lg:w-[80%] xl:w-[90%] gap-x-8 lg:gap-0 xl:gap-x-8 mb-36 justify-center'>
                    <div className="cer text-center">
                        <Image src="/images/certificate1.jpg" alt="bldg1"  className='about-image1 w-[337px] lg:w-[290px] xl:w-[337px] mb-12' width="337"  height="0" />
                        <div className='w-80'>
                            <p className=' text-center font-semibold text-sm text-[#1B4896] lg:mr-[25px] xl:mr-[0px]'>
                            QUALITY MANAGEMENT SYSTEM CERTIFICATE OF APPROVAL
                            </p>
                        </div>
                    </div>
                    <div className="cer text-center">
                        <Image src="/images/certificate2.jpg" alt="bldg2" className='about-image2 w-[337px] lg:w-[290px] xl:w-[337px] mb-12' width="337"  height="0"/>
                        <div className='w-80'>
                            <p className=' text-center font-semibold text-sm text-[#1B4896] lg:mr-[25px] xl:mr-[0px]'>
                            ENVIRONMENTAL MANAGEMENT SYSTEM CERTIFICATE OF APPROVAL
                            </p>
                        </div>
                    </div>
                    <div className="cer text-center ">
                        <Image src="/images/certificate3.jpg" alt="bldg3"  className='about-image3 w-[337px] lg:w-[290px] xl:w-[337px] mb-12' width="337"  height="0"/>
                        <div className='w-80'>
                            <p className=' text-center font-semibold text-sm text-[#1B4896] lg:mr-[15px] xl:mr-[0px]'>
                            OCCUPATIONAL HEALTH AND SAFETY MANAGEMENT SYSTEM CERTIFICATE OF APPROVAL
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full lg:w-[95%] xl:w-full'>
                <div className='justify-center'>
                    <p className='font-bold text-4xl/[30px] ml-80 lg:ml-16 xl:ml-[300px] mb-16'>Client Reviews</p>
                </div>                    
                <div className="ml-14 flex flex-1 gap-x-8 mb-4 justify-center">
                    <Image src="/images/client.jpg" alt="bldg2" width="280"  height="0" className='about-image2 mb-12 rounded-2xl' />
                    <Image src="/images/client.jpg" alt="bldg2" width="280"  height="0" className='about-image2 mb-12 rounded-2xl' />
                    <Image src="/images/client.jpg" alt="bldg2" width="280"  height="0" className='about-image2 mb-12 rounded-2xl' />
                </div>

                <div className="ml-14 flex flex-1 gap-x-8 mb-36 justify-center">
                    <Image src="/images/client.jpg" alt="bldg2" width="280"  height="0" className='about-image2 mb-12 rounded-2xl ' />
                    <Image src="/images/client.jpg" alt="bldg2" width="280"  height="0" className='about-image2 mb-12 rounded-2xl' />
                    <Image src="/images/client.jpg" alt="bldg2" width="280"  height="0" className='about-image2 mb-12 rounded-2xl' />
                </div>
            </div>
            

            
            <div className='flex justify-center'>
                <div className="ceo-card max-w-md w-full lg:max-w-full lg:flex ">
                        <div className=" flex-none text-center overflow-hidden rounded-bl-3xl" title="Woman holding a mug">
                            <a href="#"> 
                            <Image  src="/images/ceo.jpg" alt="ceo image" width="360" height="450" className="ceo-img"/>
                            </a>
                        </div>
                        <div className="ceo-thought bg-white rounded-b p-20 flex flex-col justify-between leading-normal rounded-br-3xl">
                            <div className="mb-10">
                                <div className="text-gray-900 font-bold text-3xl/[46px] mb-6">
                                Hear What our ceo says
                                </div>
                                <p className="text-gray-700 font-normal text-base/[38px] mb-10">
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