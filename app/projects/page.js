"use client";
import React from "react";

import { useSpring, animated, config } from "@react-spring/web";

function Num({ n }) {
  const { width } = useSpring({
    from: { width: 0 },
    width: n,
    config: config.slow,
    delay: 200,
    loop: true,
  });
  return <animated.div>{width.to((n) => Math.floor(n))}</animated.div>;
}

const page = () => {
  const gallery = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  ];
  const factor = gallery.length %2==0?Math.floor(gallery.length / 2):Math.floor(gallery.length / 2)+1;
  const firstgallery = gallery.slice(0,factor);
  const secondgallery = gallery.slice(factor);
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
          <Num n={100} />
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 p-20 gap-10">
          <div className="grid gap-10">
            {firstgallery.map((link, i) => (
              <div key={i}>
                <img src={link} alt="" className={"h-auto max-w-full"} />
              </div>
            ))}
          </div>
          <div className="grid gap-10 translate-y-1">
            <nav className="self-center w-full max-w-xl ">
              <div className="flex flex-col lg:flex-row justify-between items-center md:items-start border-b-2 border-blue-900">
                <ul className="flex flex-col lg:flex-row items-center text-sm md:text-lg font-bold md:px-4 lg:px-10 my-2">
                  <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-3 lg:px-5 mb-2 lg:mb-0">
                    <a href="#">Home</a>
                  </li>
                  <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-3 lg:px-5 mb-2 lg:mb-0">
                    <a href="#">Contact</a>
                  </li>
                  <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-3 lg:px-5 mb-2 lg:mb-0">
                    <a href="#">Services</a>
                  </li>
                  <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-3 lg:px-5 mb-2 lg:mb-0">
                    <a href="#">About</a>
                  </li>
                </ul>
              </div>
            </nav>

            {secondgallery.map((link, i) => (
              <div key={i}>
                <img src={link} alt="" className={"h-auto max-w-full"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
