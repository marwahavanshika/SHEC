"use client";
import React, { useState, useEffect } from "react";
import { useSprings, animated, useSpring } from "@react-spring/web";
import Image from "next/image";

const ImageGallery = () => {
  const images = [
    "/images/carousal1.jpg",
    "/images/carousal2.jpg",
    "/images/carousal3.jpg",
    "/images/carousal4.jpg",
    "/images/carousal5.jpg",
    "/images/carousal6.jpg",
    "/images/carousal7.jpg",
    "/images/carousal1.jpg",
    "/images/carousal2.jpg",
    "/images/carousal3.jpg",
  ];

  const helper = [
    {
      name: "Dummy",
      post: "Getmax",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident a delectus amet. Dolore ducimus quia accusantium harum obcaecati perspiciatis.",
    },
    {
      name: "Dummy",
      post: "Getmax",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident a delectus amet. Dolore ducimus quia accusantium harum obcaecati perspiciatis.",
    },
    {
      name: "Dummy",
      post: "Getmax",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident a delectus amet. Dolore ducimus quia accusantium harum obcaecati perspiciatis.",
    },
    {
      name: "Dummy",
      post: "Getmax",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident a delectus amet. Dolore ducimus quia accusantium harum obcaecati perspiciatis.",
    },
    {
      name: "Dummy",
      post: "Getmax",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident a delectus amet. Dolore ducimus quia accusantium harum obcaecati perspiciatis.",
    },
    {
      name: "Dummy",
      post: "Getmax",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident a delectus amet. Dolore ducimus quia accusantium harum obcaecati perspiciatis.",
    },
    {
      name: "Dummy",
      post: "Getmax",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident a delectus amet. Dolore ducimus quia accusantium harum obcaecati perspiciatis.",
    },
    {
      name: "Dummy",
      post: "Getmax",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident a delectus amet. Dolore ducimus quia accusantium harum obcaecati perspiciatis.",
    },
    {
      name: "Dummy",
      post: "Getmax",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident a delectus amet. Dolore ducimus quia accusantium harum obcaecati perspiciatis.",
    },
    {
      name: "Dummy",
      post: "Getmax",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident a delectus amet. Dolore ducimus quia accusantium harum obcaecati perspiciatis.",
    },
  ];

  const [displayImages, setDisplayImages] = useState(images.slice(0, 5));
  const [Index, setIndex] = useState(4);

  const [springReview, setReview] = useSpring(() => ({
    opacity: 1,
    transform: "translateX(0)",
  }));
  const [springs, set] = useSprings(displayImages.length, (_) => ({
    opacity: 1,
    transform: "translateX(0)",
  }));

  const updateImages = () => {
    set((i) => ({
      opacity: 0,
      transform: `translateX(${i * 100}px)`,
      onRest: () => {
        setDisplayImages((prevImages) => {
          const firstImage = prevImages[0];
          const remainingImages = prevImages.slice(1);
          const nextImageIndex =
            (images.indexOf(firstImage) + 1) % images.length;
          setIndex(nextImageIndex);
          return [...remainingImages, images[nextImageIndex]];
        });
        set({ opacity: 1, transform: "translateX(0)" });
      },
    }));
    setReview({
      opacity: 0,
      transform: "translateX(100px)",
      onRest: () => {
        setReview({ opacity: 1, transform: "translateX(0)" });
      },
    });
  };

  useEffect(() => {
    const intervalId = setInterval(updateImages, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const h = ["100px", "120px", "150px", "120px", "100px"];

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1 className="text-[#03014C] text-center text-2xl md:text-4xl not-italic font-extrabold leading-[normal] capitalize font-popins">
        Let's hear
        <br />
        What they says
      </h1>
      <div className="flex flex-row justify-around w-full">
        <h1 className="text-[#1B4896] text-center text-[6.25rem] not-italic font-extrabold leading-[normal] font-montserrat">
          &#8220;
        </h1>
        <h2 className="text-[#1B4896] text-center text-[6.25rem] not-italic font-extrabold leading-[normal] font-montserrat">
          &#8221;
        </h2>
      </div>
      <animated.h2
        className="text-[#03014C] max-w-[50%] text-center text-xs md:text-base not-italic font-normal leading-[normal] font-popins"
        style={springReview}
      >
        {helper[(Index - 2 + helper.length) % helper.length].review}
      </animated.h2>
      <div className=" flex flex-col gap-2 items-center justify-center ">
        <div className="flex items-center justify-center  w-full gap-5 sm:gap-10 md:gap-32 m-10 overflow-x-hidden">
          {springs.map((props, index) => (
            <animated.div
              style={{
                ...props,
                height: h[index],
                border: index === 2 ? "4px solid darkblue" : "0px",
              }}
              className=" p-2 aspect-square overflow-hidden rounded-full"
              key={index}
            >
              <Image
                width={100}
                height={100}
                src={displayImages[index]}
                alt=""
                className=" w-full h-full rounded-full"
              />
            </animated.div>
          ))}
        </div>
        <animated.h1
          style={springReview}
          className={
            "text-[#1E1F4B] text-center text-2xl not-italic font-bold leading-[normal] font-popins"
          }
        >
          {helper[(Index - 2 + helper.length) % helper.length].name}
        </animated.h1>
        <animated.h1
          style={springReview}
          className={
            "text-[#2E3E5C] text-center text-xl not-italic font-medium leading-[normal] font-popins"
          }
        >
          {helper[(Index - 2 + helper.length) % helper.length].post}
        </animated.h1>
      </div>
    </div>
  );
};

export default ImageGallery;
