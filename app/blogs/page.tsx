import Image from 'next/image';
import './blog.css'
import Card from './blogcomponents/Card';
import Categorycard from './blogcomponents/Categorycard';
import Horizontalcard from './blogcomponents/Horizontalcard';

const blogs = [{
    blogTitle: "Noteworthy technology acquisitions 2021",
    blogDesc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
        blogTitle: "Noteworthy technology acquisitions 2022",
        blogDesc: "Here are the biggest enterprise technology acquisitions of 2022 so far, in reverse chronological order.",
    },
    {
        blogTitle: "Noteworthy technology acquisitions 2023",
        blogDesc: "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
    },
    {
        blogTitle: "Noteworthy technology acquisitions 2022",
        blogDesc: "Here are the biggest enterprise technology acquisitions of 2022 so far, in reverse chronological order.",
    },
    {
        blogTitle: "Noteworthy technology acquisitions 2023",
        blogDesc: "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
    },
    {
        blogTitle: "Noteworthy technology acquisitions 2023",
        blogDesc: "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
    },
    {
        blogTitle: "Noteworthy technology acquisitions 2023",
        blogDesc: "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
    },
    {
        blogTitle: "Noteworthy technology acquisitions 2023",
        blogDesc: "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
    },
    {
        blogTitle: "Noteworthy technology acquisitions 2023",
        blogDesc: "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
    }
]


const category = [{
    categoryTimeline:"1 Month ago",
    categoryTitle: "Noteworthy technology acquisitions 2021",
    categoryDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel veniam rem assumenda, nemo ut explicabo laboriosam ea nesciunt aliquid."
    }
]

const horizontal = [{
    horizontalTitle: "Akame Ga Kill : Season Finale",
    horizontalDesc: "21 March 2021",
    type: "square",
    },
    {
    horizontalTitle: "Akame Ga Kill : Season Finale",
    horizontalDesc: "21 March 2021",
    type: "square"
    },
    {
    horizontalTitle: "Akame Ga Kill : Season Finale",
    horizontalDesc: "21 March 2021",
    type: "square"
    }

]


export default function Blog () {
    const an = ["1","2","3","4","5"];
    return (
        <>
            <div className="parent text-center">
                <Image src="/head.jpg" alt="head" width="1519"  height="0" className='head-image' />
            </div>

            <div className='img-text text-center'>
                <h3 text-bold text-center>you ask it</h3>
                <p text-center>we build it</p>
            </div>
            
            <div className="text-center ">
                <br/>
                <br/>
                <br/>
                <h3 className="font-bold text-4xl">Blogs Spotlights</h3>
                <br/>
                <p className="text-base">We bet you, you will wish to book all.</p>
                <br/>
                <br/>
            </div>

            <div className='blog-container'>
                {blogs.map(blog => (
                    <Card 
                        title={blog.blogTitle}
                        desc={blog.blogDesc}
                    />
                ))
                }
            </div>

            <br/>
            <br/>

            <div className="grid gap-10 translate-y-1 ">
                <nav className="self-center w-full max-w-xl ml-14">
                <div className="flex flex-col lg:flex-row justify-between items-center md:items-start ">
                    <ul className="flex flex-col lg:flex-row items-center text-sm md:text-lg my-2">
                    {[
                        "Category 1",
                        "Category 2",
                        "Category 3",
                        "Category 4",
                    ].map((tag, i) => (
                        <li key={i} className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-3 lg:px-5 mb-2 lg:mb-0">
                        <a href="#">{tag}</a>
                        </li>
                    ))}
                    </ul>
                </div>
                </nav>
            </div>

            <hr className=" h-px bg-gray-200 border-0 dark:bg-gray-700"/>
            <br/>
            <br/>


            <div className='ml-8 flex flex-1'>
                    <div className='border border-indigo-600'> 
                            <div className='category-container ml-10'>
                                {category.map(category => (
                                    <Categorycard
                                        timeline={category.categoryTimeline} 
                                        title={category.categoryTitle}
                                        desc={category.categoryDesc}
                                    />
                                ))
                                }
                            </div>
                            <div className="grid gap-10 translate-y-1 ">
                                <nav className="self-center w-full max-w-xl ml-5">
                                    <div className="flex flex-col lg:flex-row justify-between items-center md:items-start ">
                                        <ul className="flex flex-col lg:flex-row items-center text-sm md:text-lg my-2">
                                        {[ 
                                            "View Post",
                                        ].map((tag,i) => (
                                            <li key={i} className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2         rounded-lg px-2 md:px-3 lg:px-5 mb-2 lg:mb-0">
                                                <a href="#">{tag}</a>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                    </div>

                    <div className='horizontal-container'>
                                {horizontal.map(horizontal => (
                                    <Horizontalcard 
                                    title={horizontal.horizontalTitle}
                                    desc={horizontal.horizontalDesc}
                                    type={horizontal.type}
                                    />
                                ))
                                }
                    </div>
                

                <div className='horizontal-container ml-14'>
                    {horizontal.map(horizontal => (
                        <Horizontalcard 
                            title={horizontal.horizontalTitle}
                            desc={horizontal.horizontalDesc}
                            type="rectangle"
                        />
                    ))
                    }
                </div>
                
            </div>
  
        </>
   
    );
};