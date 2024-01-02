"use client";
import { useState, useEffect } from "react";

function page() {
  const team = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [currentProgress, setCurrentProgress] = useState(0);
  const strokeWidth = 20;
  const radius = 200;
  const circumference = 2 * Math.PI * radius;
  const dummy = [
    "dummy 1",
    "dummy 2",
    "dummy 3",
    "dummy 4",
    "dummy 5",
    "dummy 6",
    "dummy 7",
    "dummy 8",
    "dummy 9",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      let direction = 1;
      setCurrentProgress((prevProgress) => {
        if (prevProgress === 100 || prevProgress === 0) {
          direction = -1 * direction;
        }
        return prevProgress + direction;
      });
    }, 200);
    return () => clearInterval(intervalId);
  }, []);

  const strokeDashoffset =
    circumference - (currentProgress / 100) * circumference;
  return (
    <div className=" overflow-x-hidden relative">
      <div className=" absolute h-screen inset-0 flex items-center justify-center">
        <div className=" relative w-[400px] -rotate-12 h-[400px] z-[1] border-4 border-white border-opacity-50 rounded-full">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            const theta = ((2 * Math.PI) / 9) * index;
            const x = radius * Math.cos(theta); // subtract 10 (half of child div size) to center
            const y = radius * Math.sin(theta); // subtract 10 (half of child div size) to center
            return (
              <div
                key={item}
                className="absolute w-16 h-16 border-2 border-white z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-no-repeat  bg-cover  md:bg-center "
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  backgroundImage:"url('/images/projbg.jpg')"
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div
        className=" relative h-screen bg-no-repeat  bg-cover  md:bg-center "
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 10%), url('/images/projbg.jpg')",
        }}
      >
        <svg
          width={radius * 2 + strokeWidth * 2}
          className="flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 justify-center"
          height={radius * 2 + strokeWidth * 2}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            stroke="" // Tailwind's coolGray-200
            fill="#0487C98A"
            className=" z-10"
            strokeWidth={strokeWidth}
            r={radius - strokeWidth/1.25}
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
          />
          <text
            x={radius / 2}
            y={-1.25 * radius}
            fill="white"
            className=" not-italic font-bold leading-[5.81638rem] tracking-[0.02406rem] rotate-90 text-4xl font-popins"
          >
            SilverHeights
          </text>
          <text
            x={radius/2+30}
            y={-1*radius}
            fill="white"
            className=" rotate-90 text-2xl transition-all duration-200 ease-out"
          
          >{dummy[(Math.round(currentProgress / 11 -0.5)%dummy.length)]}</text>
          <circle
            className=" transition-all duration-150 ease-out"
            stroke="#24A6E0"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            r={radius}
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
          />
        </svg>
      </div>
      <div className=" flex flex-col justify-center py-20 px-10 md:px-32">
        <h1 className="text-[#1E1F4B] text-lg sm:text-2xl md:text-4xl not-italic font-bold leading-[3.25rem] tracking-[0.0125rem] capitalize font-popins ps-5 ">
          We create world-className Architectural Designs
        </h1>
        <h2 className="text-[#2E3E5C] text-sm sm:text-base md:text-xl not-italic font-normal leading-9 font-popins opacity-80">
          By information about design the world to the best architects, heatc
          helping By information
        </h2>
        <div className="grid max-lg:grid-rows-[50%_50%] lg:grid-cols-[50%_50%] gap-5">
          <div className="flex flex-col gap-3">
            <img
              src="/images/services1.png"
              alt=""
              className=" h-full w-full rounded-lg"
            />
            <h1 className="text-[#2e3e5c] text-xs md:text-sm not-italic font-normal leading-[1.625rem] font-popins opacity-80">
              Interior Design - June 20, 2022
            </h1>
            <h2 className="text-[#1E1F4B] text-lg md:text-2xl not-italic font-bold leading-7 font-popins">
              Interior Redesign
            </h2>
            <h3 className="text-[#2E3E5C] text-xs md:text-sm not-italic font-normal leading-[1.625rem] font-popins">
              By information about design the world to the best instructors,
              heatc helping By information about design the world to the best
              instructors, heatc helping
            </h3>
          </div>
          <div className=" grid grid-cols-[50%_50%] gap-5">
            <div className="flex flex-col gap-3">
              <img
                src="/images/services2.png"
                alt=""
                className=" h-full w-full rounded-md"
              />
              <h1 className="text-[#2e3e5c] text-xs md:text-sm not-italic font-normal leading-[1.625rem] font-popins opacity-80">
                Commercial Design - June 20, 2022
              </h1>
              <h2 className="text-[#2e3e5c] text-sm md:text-lg not-italic font-bold leading-7 capitalize font-popins">
                Public Gathering Building Designs
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <img
                src="/images/services3.png"
                alt=""
                className=" h-full w-full rounded-md"
              />
              <h1 className="text-[#2e3e5c] text-xs md:text-sm not-italic font-normal leading-[1.625rem] font-popins opacity-80">
                Commercial Design - June 20, 2022
              </h1>
              <h2 className="text-[#2e3e5c] text-sm md:text-lg not-italic font-bold leading-7 capitalize font-popins">
                Government Certified Designs
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <img
                src="/images/services4.png"
                alt=""
                className=" h-full w-full rounded-md"
              />
              <h1 className="text-[#2e3e5c] text-xs md:text-sm not-italic font-normal leading-[1.625rem] font-popins opacity-80">
                Industrial Design - June 20, 2022
              </h1>
              <h2 className="text-[#2e3e5c] text-sm md:text-lg not-italic font-bold leading-7 capitalize font-popins">
                Industrial Designs
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <img
                src="/images/services5.png"
                alt=""
                className=" h-full w-full rounded-md"
              />
              <h1 className="text-[#2e3e5c] text-xs md:text-sm not-italic font-normal leading-[1.625rem] font-popins opacity-80">
                Supervision - June 20, 2022
              </h1>
              <h2 className="text-[#2e3e5c] text-sm md:text-lg not-italic font-bold leading-7 capitalize font-popins">
                Supervise Projects
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-10">
        <h1 className="text-[#03014C] text-center text-[2.5rem] not-italic font-extrabold leading-[normal] capitalize font-popins">
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
        <h2 className="text-[#03014C] max-w-[40%] text-center text-base not-italic font-normal leading-[normal] font-popins -translate-y-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          vero suscipit dignissimos amet temporibus possimus dolor saepe vel, at
          perspiciatis sit in! Repellendus nobis doloribus molestias iure nulla
          ut voluptate optio, nostrum deleniti in cupiditate ipsa dolorem
          aliquam quis maxime numquam. Non similique accusantium delectus dolor
          ea inventore blanditiis dolore.
        </h2>
        <div
          className=" flex flex-row gap-44 h-[130px] justify-center overflow-visible items-center relative"
          id="carousal"
        >
          {team.map((_, i) => (
            <div className="aspect-square rounded-full overflow-hidden" key={i}>
              <img
                src="/images/projbg.jpg"
                alt=""
                className=" w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-row p-20 justify-around flex-wrap-reverse gap-5 md:gap-10">
        <div className=" flex flex-col px-10 min-w-96 max-w-[50%] flex-1 items-start justify-between ">
          <h1 className="text-[#1E1F4B] text-xl md:text-[2.5rem] not-italic font-bold leading-[3.25rem] tracking-[0.0125rem] capitalize font-popins">
            How we can help you
          </h1>
          <h2 className="text-[#1B1D21] text-base md:text-xl not-italic font-normal leading-9 font-popins opacity-80">
            Follow our newsletter. We will regulary update our latest project
            and availability.
          </h2>

          <form className=" w-full">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center mx-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#2E3E5C"
                >
                  <g opacity="0.7">
                    <path
                      d="M12.6942 15.0318C12.4675 15.1735 12.2125 15.2302 11.9858 15.2302C11.7591 15.2302 11.5041 15.1735 11.2774 15.0318L0 8.14636V17.2987C0 19.2538 1.58678 20.8406 3.54191 20.8406H20.4581C22.4132 20.8406 24 19.2538 24 17.2987V8.14636L12.6942 15.0318Z"
                      fill="#2E3E5C"
                    />
                    <path
                      d="M20.458 3.15942H3.54185C1.87007 3.15942 0.453305 4.34951 0.113281 5.93628L12.0141 13.1901L23.8866 5.93628C23.5466 4.34951 22.1298 3.15942 20.458 3.15942Z"
                      fill="#2E3E5C"
                    />
                  </g>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-5 ps-10 text-sm text-gray-900 border border-gray-300 rounded bg-[rgba(27,72,150,0.1)] placeholder:text-[#2E3E5C] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-[#1B4896] hover:bg-blue-950 hover:transition-colors transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-10 py-2"
                style={{
                  boxShadow: "0px 6px 20px 0px rgba(112,111,229,0.50)",
                }}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect
                opacity="0.15"
                width="50"
                height="50"
                rx="12"
                fill="#1B4896"
              />
              <path d="M30.1417 13V37H25.5703V13H30.1417Z" fill="#1B4896" />
              <path
                d="M31.2852 13H32.9994C35.2086 13 36.9994 14.7909 36.9994 17V33C36.9994 35.2091 35.2086 37 32.9994 37H31.2852V13Z"
                fill="#2E3E5C"
              />
              <path d="M24.4269 13V37H19.8555V13H24.4269Z" fill="#2E3E5C" />
              <path
                d="M18.7143 13V37H17C14.7909 37 13 35.2091 13 33V17C13 14.7909 14.7909 13 17 13H18.7143Z"
                fill="#1B4896"
              />
            </svg>
            <h1 className="text-[#1E1F4B] text-xl not-italic font-semibold leading-7 font-popins">
              Planning
            </h1>
            <h2 className="text-[#2e3e5c] text-base not-italic font-normal leading-7 font-popins opacity-80">
              Sometimes features require a short description
            </h2>
          </div>
          <div className="flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect
                opacity="0.15"
                width="50"
                height="50"
                rx="12"
                fill="#1B4896"
              />
              <svg
                x="17.5"
                y="13"
                width="15"
                height="24"
                viewBox="0 0 15 24"
                fill="none"
              >
                <path
                  d="M12.5625 6.70312C12.5625 3.78243 10.1863 1.40625 7.26562 1.40625C4.34493 1.40625 1.96875 3.78243 1.96875 6.70312C1.96875 9.62382 4.34493 12 7.26562 12C10.1863 12 12.5625 9.62382 12.5625 6.70312Z"
                  fill="#1B4896"
                />
                <path
                  d="M14.5312 17.9062V2.57812C14.5312 1.15655 13.3747 0 11.9531 0H2.57812C1.15655 0 0 1.15655 0 2.57812V17.9062H14.5312ZM9.14062 15.0938H5.39062C5.00231 15.0938 4.6875 14.7789 4.6875 14.3906C4.6875 14.0023 5.00231 13.6875 5.39062 13.6875H9.14062C9.52894 13.6875 9.84375 14.0023 9.84375 14.3906C9.84375 14.7789 9.52894 15.0938 9.14062 15.0938ZM3.51562 6.42188H4.30153C4.37766 6.10106 4.50417 5.79961 4.67302 5.52675L4.1168 4.97053C3.8422 4.69594 3.8422 4.25077 4.1168 3.97617C4.39134 3.70158 4.83656 3.70158 5.11116 3.97617L5.66738 4.53239C5.94023 4.36355 6.24169 4.23703 6.5625 4.16091V3.375C6.5625 2.98669 6.87731 2.67188 7.26562 2.67188C7.65394 2.67188 7.96875 2.98669 7.96875 3.375V4.16091C8.28956 4.23703 8.59102 4.36355 8.86388 4.53239L9.42009 3.97617C9.69464 3.70158 10.1399 3.70158 10.4145 3.97617C10.689 4.25077 10.689 4.69594 10.4145 4.97053L9.85823 5.52675C10.0271 5.79961 10.1536 6.10106 10.2297 6.42188H11.0156C11.4039 6.42188 11.7188 6.73669 11.7188 7.125C11.7188 7.51331 11.4039 7.82812 11.0156 7.82812H10.2297C10.1536 8.14894 10.0271 8.45039 9.85823 8.72325L10.4145 9.27947C10.689 9.55406 10.689 9.99923 10.4145 10.2738C10.2772 10.4111 10.0972 10.4798 9.9173 10.4798C9.73739 10.4798 9.55739 10.4112 9.42014 10.2738L8.86392 9.71761C8.59106 9.88645 8.28961 10.013 7.9688 10.0891V10.875C7.9688 11.2633 7.65398 11.5781 7.26567 11.5781C6.87736 11.5781 6.56255 11.2633 6.56255 10.875V10.0891C6.24173 10.013 5.94028 9.88645 5.66742 9.71761L5.1112 10.2738C4.97391 10.4111 4.79395 10.4798 4.61405 10.4798C4.43414 10.4798 4.25414 10.4112 4.11689 10.2738C3.8423 9.99923 3.8423 9.55406 4.11689 9.27947L4.67311 8.72325C4.50427 8.45039 4.37775 8.14894 4.30163 7.82812H3.51562C3.12731 7.82812 2.8125 7.51331 2.8125 7.125C2.8125 6.73669 3.12731 6.42188 3.51562 6.42188Z"
                  fill="#1B4896"
                />
                <path
                  d="M0 19.3125V21.4219C0 22.8435 1.15655 24 2.57812 24H11.9531C13.3747 24 14.5312 22.8435 14.5312 21.4219V19.3125H0ZM8.20312 22.3594H6.32812C5.93981 22.3594 5.625 22.0446 5.625 21.6562C5.625 21.2679 5.93981 20.9531 6.32812 20.9531H8.20312C8.59144 20.9531 8.90625 21.2679 8.90625 21.6562C8.90625 22.0446 8.59144 22.3594 8.20312 22.3594Z"
                  fill="#2E3E5C"
                />
                <rect
                  x="4.59375"
                  y="13.6406"
                  width="5.39062"
                  height="1.45312"
                  rx="0.726562"
                  fill="#1B4896"
                />
                <rect
                  x="4.45312"
                  y="1.03125"
                  width="5.39062"
                  height="1.45312"
                  rx="0.726562"
                  fill="#EAE9FB"
                />
              </svg>
            </svg>
            <h1 className="text-[#1E1F4B] text-xl not-italic font-semibold leading-7 font-popins">
              Interior Design
            </h1>
            <h2 className="text-[#2e3e5c] text-base not-italic font-normal leading-7 font-popins opacity-80">
              Sometimes features require a short description
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="50"
              viewBox="0 0 49 50"
              fill="none"
            >
              <rect
                opacity="0.15"
                x="-1"
                width="50"
                height="50"
                rx="12"
                fill="#1B4896"
              />
              <path
                d="M12.9473 27.8977C12.4241 27.8977 12 27.4736 12 26.9504C12 26.4272 12.4241 26.0031 12.9473 26.0031H35.0525C35.5757 26.0031 35.9998 26.4272 35.9998 26.9504C35.9998 27.4736 35.5757 27.8977 35.0525 27.8977H12.9473Z"
                fill="#1B4896"
              />
              <path
                d="M24.0027 22.8414C21.5612 22.8414 19.582 20.8622 19.582 18.4207C19.582 15.9792 21.5612 14 24.0027 14C26.4442 14 28.4234 15.9792 28.4234 18.4207C28.4234 20.8622 26.4442 22.8414 24.0027 22.8414Z"
                fill="#706FE5"
              />
              <path
                d="M24.0026 19.0522C24.3514 19.0522 24.6341 18.7695 24.6341 18.4207C24.6341 18.0719 24.3514 17.7892 24.0026 17.7892C23.6538 17.7892 23.3711 18.0719 23.3711 18.4207C23.3711 18.7695 23.6538 19.0522 24.0026 19.0522Z"
                fill="#1B4896"
              />
              <path
                d="M21.4763 23.5144C19.8725 26.4333 15.328 34.7534 15.1144 35.1437C14.9445 35.454 14.5529 35.5643 14.2461 35.3882C12.1012 34.1572 11.3657 31.4285 12.6017 29.3004L18.3624 19.1409C18.6055 21.0632 19.8087 22.6862 21.4763 23.5144Z"
                fill="#2E3E5C"
              />
              <path
                d="M29.6396 19.1362L35.3986 29.2959C36.636 31.4291 35.9016 34.1571 33.7596 35.388C33.4525 35.5645 33.0603 35.4539 32.8906 35.143C29.0249 28.0604 27.3132 24.9275 26.5312 23.5113C28.1971 22.6816 29.3982 21.0582 29.6396 19.1362V19.1362Z"
                fill="#2E3E5C"
              />
            </svg>
            <h1 className="text-[#1E1F4B] text-xl not-italic font-semibold leading-7 font-popins">
              Modeling
            </h1>
            <h2 className="text-[#2e3e5c] text-base not-italic font-normal leading-7 font-popins opacity-80">
              Sometimes features require a short description
            </h2>
          </div>
          <div className="flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect
                opacity="0.15"
                width="50"
                height="50"
                rx="12"
                fill="#1B4896"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.6101 30.28L28.3781 34.12H29.7991C30.0642 34.12 30.2791 34.3349 30.2791 34.6C30.2791 34.8651 30.0642 35.08 29.7991 35.08H20.1991C19.934 35.08 19.7191 34.8651 19.7191 34.6C19.7191 34.3349 19.934 34.12 20.1991 34.12H21.8311L22.5991 30.28H18.2791C16.5864 30.28 15.186 29.0283 14.9531 27.4H35.0451C34.8122 29.0283 33.4118 30.28 31.7191 30.28H27.6101Z"
                fill="#2E3E5C"
              />
              <path
                d="M14.9199 26.44V16.36C14.9199 15.5648 15.5646 14.92 16.3599 14.92H33.6399C34.4352 14.92 35.0799 15.5648 35.0799 16.36V26.44H14.9199Z"
                fill="#1B4896"
              />
            </svg>
            <h1 className="text-[#1E1F4B] text-xl not-italic font-semibold leading-7 font-popins">
              Structural Design
            </h1>
            <h2 className="text-[#2e3e5c] text-base not-italic font-normal leading-7 font-popins opacity-80">
              Sometimes features require a short description
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
