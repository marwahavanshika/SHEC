"use client";
import { useState } from "react";
import Image from "next/image";
const imgs = [
  {
    link: "/images/carousal4.jpg",
    type: "FCA",
    name: "Katty",
    post: "Fashion Director",
  },
  {
    link: "/images/carousal3.jpg",
    type: "INTERIOR",
    name: "Katty",
    post: "Fashion Director",
  },
  {
    link: "/images/carousal2.jpg",
    type: "TOWER",
    name: "Katty",
    post: "Fashion Director",
  },
  {
    link: "/images/carousal1.jpg",
    type: "MAJLIS",
    name: "ISLAMIC MAJLIS",
    post: "Fashion Director",
  },
  {
    link: "/images/carousal5.jpg",
    type: "CAFE",
    name: "Katty",
    post: "Fashion Director",
  },
  {
    link: "/images/carousal6.jpg",
    type: "OFFICE",
    name: "Katty",
    post: "Fashion Director",
  },
  {
    link: "/images/carousal7.jpg",
    type: "LIVING",
    name: "Katty",
    post: "Fashion Director",
  },
];

export default function Gallery() {
  const [open, setopen] = useState(3);
  return (
    <>
      <div className="md:flex hidden relative justify-center items-center gap-1 md:gap-2 slider">
        {imgs.map((value, i) => (
          <div
            key={i}
            className="w-6 group relative md:w-20 hover:w-[14rem] md:hover:w-[25rem] hover:h-[300px] md:hover:h-[400px] hover:transition-all hover:duration-500 hover:ease-in-out transform transition-all duration-500 ease-in-out flex-grow-0  focus:w-[16rem] md:focus:w-[25rem] focus:h-[300px] md:focus:h-[400px] focus:transition-all focus:duration-500 focus:ease-in-out active:w-[16rem] md:active:w-[25rem] active:h-[300px] md:active:h-[400px] active:transition-all active:duration-500 active:ease-in-out"
          >
            <Image
              width={1000}
              height={1000}
              src={value.link}
              className={" w-full h-full object-cover rounded"}
              alt="Random"
              key={i}
            />
            <div className=" absolute inset-0 z-10 bg-[rgba(0,0,0,0.5)] group-hover:bg-transparent group-hover:transition-all group-hover:duration-500 transition-all duration-500 text-white text-base md:text-[1.6685rem] not-italic font-bold leading-[165%] tracking-[0.95106rem] capitalize font-popins flex items-center justify-center">
              <span className=" -rotate-90 group-hover:opacity-0 group-hover:transition-all group-hover:duration-500 transition-all duration-500">
                {value.type}
              </span>
            </div>
            <div className=" opacity-0 group-hover:opacity-100 absolute bottom-5 left-5 group-hover:transition-all group-hover:duration-500 transition-all duration-500">
              <h1 className="text-white text-lg md:text-xl not-italic font-bold leading-[165%] capitalize font-popins">
                {value.name}
              </h1>
              <h2 className="text-white text-base md:text-lg not-italic font-normal leading-[0.859rem] tracking-[0.01544rem]">
                {value.post}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className=" md:hidden relative flex flex-col items-center gap-8 justify-center">
        <div className="md:hidden flex justify-center items-center gap-1 md:gap-2 slider">
          {imgs.map((value, i) => (
            <div
              key={i}
              className="w-6 transition-all duration-500 ease-out relative flex-grow-0"
              onClick={()=>setopen(i)}
              style={{
                width: i === open ? "14rem" : "1.5rem",
                height:
                  i === open
                    ? "300px"
                    : i <= 3
                    ? `calc(${150}px + ${i} * 50px)`
                    : `calc(${300}px - ${i - 3} * 50px)`,
              }}
            >
              <Image
                width={1000}
                height={1000}
                src={value.link}
                className={" w-full h-full object-cover rounded"}
                alt="Random"
                key={i}
              />
              <div
                className=" absolute inset-0 z-10  text-white text-base md:text-[1.6685rem] not-italic font-bold leading-[165%] tracking-[0.95106rem] transition-all duration-500 ease-out capitalize font-popins flex items-center justify-center"
                style={{ background: i === open ? "" : "rgba(0,0,0,0.5)" }}
              >
                <span
                  className=" -rotate-90 transition-all duration-500"
                  style={{ opacity: i === open ? "0" : "1" }}
                >
                  {value.type}
                </span>
              </div>
              <div
                className=" transition-all duration-500 ease-out absolute bottom-5 left-5 "
                style={{ opacity: i === open ? "1" : "0" }}
              >
                <h1 className="text-white text-lg md:text-xl not-italic font-bold leading-[165%] capitalize font-popins">
                  {value.name}
                </h1>
                <h2 className="text-white text-base md:text-lg not-italic font-normal leading-[0.859rem] tracking-[0.01544rem]">
                  {value.post}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex flex-row gap-2">
          <button
            className={
              "w-[50px] h-[50px] shadow-[1px_1px_10px_rgba(0,0,0,0.3)] font-popins active:scale-75 z-[2] -mt-5 rounded-[50px] bg-center bg-no-repeat cursor-pointer"
            }
            onClick={() =>
              setopen((prev) => {
                return prev > 0 ? prev - 1 : 6;
              })
            }
          >
            Left
          </button>
          <button
            className={
              "w-[50px] h-[50px] shadow-[1px_1px_10px_rgba(0,0,0,0.3)] z-[2] -mt-5 rounded-[50px] bg-center bg-no-repeat cursor-pointer font-popins active:scale-90"
            }
            onClick={() =>
              setopen((prev) => {
                return (prev + 1) % 7;
              })
            }
          >
            Right
          </button>
        </div>
      </div>
    </>
  );
}
