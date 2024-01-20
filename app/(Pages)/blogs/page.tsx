import Image from "next/image";
import "./blog.css";
import Card from "./blogcomponents/Card";
import Categorycard from "./blogcomponents/Categorycard";
import Horizontalcard from "./blogcomponents/Horizontalcard";

const blogs = [
  {
    blogTitle: "Beyond Blueprints: Discover SHEC's Design Magic",
    blogDesc:
      "Dive into the world of SHEC, where innovation meets imagination. In this blog, discover how our dynamic team of designers, architects, planners, and engineers collaborate to weave magic into every project. Uncover the secrets behind our innovative engineering consultancy, where creativity knows no bounds.",
    imgLink:
      "https://th.bing.com/th/id/OIP.EybiWqiOiFo0-ElRBOIcZwHaE6?rs=1&pid=ImgDetMain",
  },
  {
    blogTitle: "Designing Tomorrow: Smart Solutions by SHEC",
    blogDesc:
      "Join us on a journey into the future as we explore SHEC's groundbreaking engineering consultancy. From sustainable designs to cutting-edge solutions, this blog showcases how our team of experts is shaping tomorrow's landscapes.",
    imgLink:
      "https://th.bing.com/th/id/OIP.njy20nuszFbgcqduqmwrMwHaEc?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    blogTitle: "SHEC Unveiled: The Art and Science of Architectural Mastery",
    blogDesc:
      "Unlock the doors to SHEC's world-class architectural prowess in this captivating blog. Delve into the stories behind our creative team, blending artistry with precision engineering. Explore the realms of innovation as we share insights into the diverse professional services that make SHEC a trailblazer in the world of design and consultancy.",
    imgLink:
      "https://th.bing.com/th?id=OIP.jCzdXmf9tTw3XJrlDpSIfwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
];

const category = [
  {
    categoryTimeline: "1 Month ago",
    categoryTitle: "Noteworthy technology acquisitions 2021",
    categoryDesc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel veniam rem assumenda, nemo ut explicabo laboriosam ea nesciunt aliquid.",
  },
];

const horizontal = [
  {
    horizontalTitle: "Akame Ga Kill : Season Finale",
    horizontalDesc: "21 March 2021",
    type: "square",
  },
  {
    horizontalTitle: "Akame Ga Kill : Season Finale",
    horizontalDesc: "21 March 2021",
    type: "square",
  },
  {
    horizontalTitle: "Akame Ga Kill : Season Finale",
    horizontalDesc: "21 March 2021",
    type: "square",
  },
];

export default function Blog() {
  {
    /*const an = ["1","2","3","4","5"];*/
  }
  return (
    <div className="pt-[80px]">
      <div className="par text-center flex justify-center  bg-no-repeat  bg-cover h-screen md:bg-center w-full">
        <Image
          src="/head.jpg"
          alt="head"
          width="1519"
          height="0"
          className="head-image"
        />
      </div>

      <div className="img-text text-center">
        <h3 text-bold text-center>
          you ask it
        </h3>
        <p text-center>we build it</p>
      </div>

      <div className="text-center ">
        <br />
        <br />
        <br />
        <h3 className="font-bold text-4xl">Blogs Spotlights</h3>
        <br />
        <p className="text-base">We bet you, you will wish to book all.</p>
        <br />
        <br />
      </div>

      <div className="blog-container p-8">
        {blogs.map((blog,i) => (
          <Card
            key={i}
            title={blog.blogTitle}
            desc={blog.blogDesc}
            lnk={blog.imgLink}
          />
        ))}
      </div>

      <br />
      <br />

      <div className="grid gap-10 translate-y-1 justify-center sm:justify-start ">
        <nav className="w-3/4  self-center sm:w-full max-w-xl ml-14 ">
          <div className="flex flex-wrap lg:flex-row sm:justify-between justify-around items-center md:items-start ">
            <ul className="flex flex-wrap lg:flex-row items-center justify-around text-sm md:text-lg my-2">
              {["Category 1", "Category 2", "Category 3", "Category 4"].map(
                (tag, i) => (
                  <li
                    key={i}
                    className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-3 lg:px-5 mb-2 lg:mb-0"
                  >
                    <a href="#">{tag}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
      </div>

      <hr className="line h-px bg-gray-200 border-0 dark:bg-gray-700 w-11/12  mx-auto" />
      <br />
      <br />

      <div className="cat-parent ml-8 flex flex-1 mb-24 sm:mb-48">
        <div className="tablet flex flex-1 border-2 border-grey-600 py-8 px-4 pb-0 ">
          <div className="category-container w-4/5">
            {category.map((category) => (
              <Categorycard
                timeline={category.categoryTimeline}
                title={category.categoryTitle}
                desc={category.categoryDesc}
              />
            ))}

            <nav className="self-center w-full max-w-xl ml-5 -translate-x-8 font-bold">
              <div className="view flex flex-col lg:flex-row justify-between items-center md:items-start ">
                <ul className="flex flex-col lg:flex-row items-center text-sm md:text-lg my-2 underline underline-offset-8">
                  {["View Post"].map((tag, i) => (
                    <li
                      key={i}
                      className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2         rounded-lg px-2 md:px-3 lg:px-5 mb-2 lg:mb-0"
                    >
                      <a href="#">{tag}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
          {/* </div> */}

          <div className="horizontal-container1 pl-8">
            {horizontal.map((horizontal) => (
              <Horizontalcard
                title={horizontal.horizontalTitle}
                desc={horizontal.horizontalDesc}
                type={horizontal.type}
              />
            ))}
          </div>
        </div>

        <div className="horizontal-container2 ml-14 py-4">
          {horizontal.map((horizontal) => (
            <Horizontalcard
              title={horizontal.horizontalTitle}
              desc={horizontal.horizontalDesc}
              type="rectangle"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
