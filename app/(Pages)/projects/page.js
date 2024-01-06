"use client";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useRouter } from "next/navigation";
import Carousal from "../../../components/Projects";
import Image from "next/image";

function Num({ n, isloaded }) {
  const props = useSpring({
    width: isloaded ? n : 0,
    config: { tension: 280, friction: 60 },
  });
  return (
    <animated.div
      className={
        "text-white text-3xl md:text-6xl not-italic leading-[60px] font-['Stick_No_Bills'] "
      }
    >
      {props.width.to((x) => x.toFixed(0))}
    </animated.div>
  );
}

const page = () => {
  
// Define your categories and their corresponding project counts
const categories = [
  { name: 'COMMERCIAL/EXTERIOR', tag:'Commercial'},
  { name: 'COMMERCIAL/INTERIOR', tag:'Commercial' },
  { name: 'INDUSTRIAL', tag:'Industrial'},
  { name: 'PUBLIC_BUILDINGS', tag:'Public_Buildings' },
  { name: 'RESIDENTIAL/EXTERIOR', tag:'Residential' },
  { name: 'RESIDENTIAL/INTERIOR', tag:'Residential'},
];

const gallery = [];

// Function to generate project objects for a given category
const generateProjects = (category) => {
  const projects = [];
  for (let i = 1; i <= 1; i++) {
    const project = {
      links: [
        `/images/${category.name}/${i}/1.jpg`,
        `/images/${category.name}/${i}/2.jpg`,
        `/images/${category.name}/${i}/3.jpg`,
        `/images/${category.name}/${i}/4.jpg`,
      ],
      tag: category.tag,
      title:category.name,
      project:i,
    };
    projects.push(project);
  }
  return projects;
};

// Generate gallery objects for each category
categories.forEach((category) => {
  const categoryProjects = generateProjects(category);
  gallery.push(...categoryProjects);
});



  const route = useRouter();

  const [leftgallery, setLeft] = useState([]);
  const [rightgallery, setRight] = useState([]);
  const [active, setTag] = useState("All");

  const sortgallery = (tag) => {
    let newgallery = gallery;
    if (tag != "All") {
      newgallery = gallery.filter((image) => image.tag === tag);
    }
    setTag(tag);
    const factor = Math.floor(newgallery.length / 2);
    setLeft(newgallery.slice(0, factor + 1));
    setRight(newgallery.slice(factor + 1));
  };

  const [isloaded, setLoading] = useState(false);
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    reset: true,
  });
  useEffect(() => {
    setLoading(true);
    sortgallery("All");
  }, []);
  return (
    <>
      <div
        className="flex justify-center relative  bg-no-repeat  bg-cover h-screen md:bg-center "
      >
        <div
          className=" absolute inset-0 w-full h-full -z-[5] "
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 10%), url('')",
          }}
        />
        <Image
          width={1000}
          height={1000}
          src={"/images/projbg.jpg"}
          className=" -z-10 absolute w-full h-full inset-0"
        />
        <div className="flex flex-col items-center justify-evenly ">
          <div className="flex flex-col justify-center items-center text-center  max-w-7xl   my-8 py-4 px-10">
            <div className="flex flex-col items-center text-gray-700mt-5">
              <h1 className="text-white text-left text-xl md:text-3xl lg:text-5xl not-italic font-semibold leading-[60px] font-popins">
                SUCCESSFULLY<span className=" font-thin"> DELIVERED</span>{" "}
                <br />
                HUMONGOUS<span className=" font-thin"> AND</span>
                <br />
                <span className=" text-xl md:text-3xl lg:text-5xl">
                  {" "}
                  GLORIOUS PROJECTS{" "}
                </span>
              </h1>
            </div>
          </div>
          <div className="border-b w-4/5 border-2 border-white-400 mb-8"></div>
          <div className="flex flex-row flex-wrap gap-5 items-center justify-around w-screen font-popins">
            <div className="flex flex-col md:gap-3 justify-center items-center min-w-96 ">
              <Num n={100} isloaded={isloaded} />
              <h1 className="text-white  not-italic font-normal leading-[60px] text-3xl md:text-6xl">
                {" "}
                Projects
              </h1>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center min-w-96">
              <Num n={15489219} isloaded={isloaded} />
              <h1 className="text-white not-italic font-normal leading-[60px] text-3xl md:text-6xl">
                Area Delivered
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-[50%_50%] place-items-start mt-10">
          <div className="grid gap-10 place-self-center">
            {leftgallery.map((value, i) => {
              return (
                <animated.div
                  style={props}
                  key={i}
                  onClick={() => route.push(`/projects/${value.title}/${value.project}`)}
                  className={"cursor-pointer"}
                >
                  <Carousal
                    key={i}
                    length={value.links.length}
                    links={value.links}
                    className={
                      "w-[150px] h-[200px] md:w-[300px] md:h-[400px] lg:w-[450px] lg:h-[500px] "
                    }
                  />
                  <h1 className="text-[#2B4248] text-xl md:text-[1.5625rem] not-italic font-normal leading-[129.7%] capitalize w-full bg-[#f6f6f6] font-popins h-10 md:h-16 pt-1 ps-3 md:pt-5 md:ps-10">
                    {value.tag}
                  </h1>
                </animated.div>
              );
            })}
          </div>
          <div className="grid gap-10 translate-y-1 justify-self-center justify-items-center">
            <nav className="self-center w-full max-w-xl ">
              <div className="flex flex-col lg:flex-row justify-between items-center md:items-start border-b-2 border-blue-900">
                <ul className="flex flex-col lg:flex-row items-center text-sm md:text-lg my-2">
                  {[
                    "All",
                    "Commercial",
                    "Industrial",
                    "Residential",
                    "Public_Buildings",
                  ].map((tag, i) => (
                    <li key={i}>
                      <button
                        onClick={() => sortgallery(tag)}
                        className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-3 lg:px-5 mb-2 lg:mb-0"
                        style={{
                          fontSize: tag === active ? "x-large" : "large",
                        }}
                      >
                        {tag}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {rightgallery.map((value, i) => (
              <animated.div
                style={props}
                className={"cursor-pointer overflow-hidden"}
                onClick={() => route.push(`/projects/${value.title}/${value.project}`)}
                key={i}
              >
                <Carousal
                  links={value.links}
                  length={value.links.length}
                  className={
                    " w-[150px] h-[200px] md:w-[300px] md:h-[400px] lg:w-[450px] lg:h-[500px] "
                  }
                  direction={1}
                />
                <h1 className="text-[#2B4248] text-xl md:text-[1.5625rem] not-italic font-normal leading-[129.7%] capitalize w-full bg-[#f6f6f6] font-popins h-10 md:h-16 pt-1 ps-3 md:pt-5 md:ps-10">
                  {value.tag}
                </h1>
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
