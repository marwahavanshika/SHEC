import Image from 'next/image';
import './blog.css'
import Card from './components/Card';

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

            
        </>
   
    );
};