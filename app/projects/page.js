"use client";
import { useState, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { useRouter } from "next/navigation";

function ImageComponent({ src, alt, category }) {
  const [loaded, setLoad] = useState(false);
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    reset: true,
    key: category,
    immediate: !loaded,
  });
  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <animated.img
      style={props}
      src={src}
      alt={alt}
      className={"h-auto max-w-full p-2"}
    />
  );
}

function Num({ n, isloaded }) {
  const props = useSpring({ width: isloaded ? n : 0, config: config.slow });
  return <animated.div>{props.width.to((x) => x.toFixed(0))}</animated.div>;
}

const page = () => {
  const gallery = [
    {
      link: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      tag: "Commercial",
    },
    {
      link: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      tag: "Commercial",
    },
    {
      link: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      tag: "Residential",
    },
    {
      link: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      tag: "Residential",
    },
    {
      link: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      tag: "Residential",
    },
    {
      link: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
      tag: "Educational",
    },
    {
      link: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
      tag: "Educational",
    },
    {
      link: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
      tag: "Educational",
    },
    {
      link: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      tag: "Industrial",
    },
    {
      link: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      tag: "Industrial",
    },
    {
      link: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
      tag: "Industrial",
    },
    {
      link: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
      tag: "Commercial",
    },
  ];

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
  useEffect(() => {
    setLoading(true);
    sortgallery("All");
  }, []);
  return (
    <>
      <div
        className="flex justify-center  bg-no-repeat  bg-cover h-screen md:bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/700x400/?white')",
        }}
      >
        <div className="flex flex-col items-center ">
          <div className="flex flex-col justify-center items-center text-center  max-w-7xl   my-8 py-4 px-10">
            <div className="flex flex-col text-gray-700mt-5">
              <h1 className="text-4xl md:text-[50px] font-semibold">lorem5</h1>
              <p className="text-xl mt-2 md:mt-4 tracking-wide">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
                aspernatur!
              </p>
            </div>
            <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium minima iusto beatae nesciunt et rerum quis ullam atque
              dolores alias! Voluptatum repellendus culpa quidem ducimus, quae
              sapiente porro corporis at atque asperiores quibusdam cumque harum
              laborum, fuga officia ipsa obcaecati doloribus ipsum. Aliquid quia
              at debitis modi ex consequatur nostrum.
            </p>
          </div>
          <Num n={100} isloaded={isloaded} />
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 place-items-start pt-10 lg:pt-20">
          <div className="grid gap-10 m-auto">
            {leftgallery.map((value, i) => {
              return (
                <div
                  key={i}
                  onClick={() => route.push(`/projects/${i}`)}
                  className={"cursor-pointer"}
                >
                  <ImageComponent
                    src={value.link}
                    alt={"hello"}
                    category={active}
                  />
                </div>
              );
            })}
          </div>
          <div className="grid gap-10 translate-y-1 mx-auto">
            <nav className="self-center w-full max-w-xl ">
              <div className="flex flex-col lg:flex-row justify-between items-center md:items-start border-b-2 border-blue-900">
                <ul className="flex flex-col lg:flex-row items-center text-sm md:text-lg my-2">
                  {[
                    "All",
                    "Commercial",
                    "Industrial",
                    "Residential",
                    "Educational",
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
              <div key={i}>
                <ImageComponent src={value.link} alt={""} category={active} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
