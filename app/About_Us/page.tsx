import Image from 'next/image';
import './About.css'
import Licencecard from './Aboutcomponents/Licencecard';

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
                <h3 className="font-bold text-5xl/[60px]">What we provide</h3>
                <br/>
                <p className="font-normal text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde tempora reiciendis quae vitae.</p>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>

            <div className='ml-14 flex flex-1 gap-x-8 mb-36'>
                <div className="parent text-center">
                    <Image src="/images/bldg1.jpg" alt="bldg1" width="367"  height="0" className='about-image1' />
                </div>
                <div className="parent text-center">
                    <Image src="/images/bldg2.jpg" alt="bldg2" width="367"  height="0" className='about-image2' />
                </div>
                <div className="parent text-center">
                    <Image src="/images/bldg3.jpg" alt="bldg3" width="367"  height="0" className='about-image3' />
                </div>
            </div>

            <div className='flex flex-1 gap-x-8 mb-24'>
                <p className='font-bold text-5xl/[57x] ml-10'>Licences</p>
                <div className='licence-container pl-8 grid grid-cols-2 ml-10 gap-x-20'>
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
                <p className='font-bold text-5xl/[30px] ml-14 mb-16'>Certifications</p>
                <div className='ml-14 flex flex-1 gap-x-8 mb-36'>
                    <div className="parent text-center">
                        <Image src="/images/certificate1.jpg" alt="bldg1" width="337"  height="0" className='about-image1 mb-12' />
                        <div className='w-80'>
                            <p className='text-center font-semibold text-sm text-[#1B4896]'>
                            QUALITY MANAGEMENT SYSTEM CERTIFICATE OF APPROVAL
                            </p>
                        </div>
                    </div>
                    <div className="parent text-center">
                        <Image src="/images/certificate2.jpg" alt="bldg2" width="337"  height="0" className='about-image2 mb-12' />
                        <div className='w-80'>
                            <p className='text-center font-semibold text-sm text-[#1B4896]'>
                            ENVIRONMENTAL MANAGEMENT SYSTEM CERTIFICATE OF APPROVAL
                            </p>
                        </div>
                    </div>
                    <div className="parent text-center ">
                        <Image src="/images/certificate3.jpg" alt="bldg3" width="337"  height="0" className='about-image3 mb-12' />
                        <div className='w-80'>
                            <p className='text-center font-semibold text-sm text-[#1B4896]'>
                            OCCUPATIONAL HEALTH AND SAFETY MANAGEMENT SYSTEM CERTIFICATE OF APPROVAL
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p className='font-bold text-4xl/[30px] ml-14 mb-16'>Client Reviews</p>
            </div>

            
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto  flex-none  rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                        <a href="#"> 
                        <Image  src="/images/ceo.jpg" alt="ceo image" width="324" height="394" className="ceo-img"/>
                        </a>
                </div>
                    <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-sm mb-2">
                            Hear What our ceo says
                            </div>
                            <p className="text-gray-700 text-xs">
                            Silver Heights, a premier UAE consulting firm since 2016, pioneers engineering and architecture, delivering world-class design and project management, transforming visions into reality with quality service
                            </p>
                        </div>
                </div>
            </div>
            
        </>
   
    );
};