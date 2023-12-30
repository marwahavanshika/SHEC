"use client";
import { useEffect } from "react";

function page() {
  const team = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div
        className="flex justify-center  bg-no-repeat  bg-cover h-screen md:bg-center "
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 10%), url('/images/projbg.jpg')",
        }}
      ></div>
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
          className=" flex flex-row team items-center justify-evenly w-full"
          id="carousal"
        >
          {team.map((_, i) => (
            <div className="aspect-square rounded-full overflow-hidden" key={i}>
              <img src="/images/projbg.jpg" alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-row py-20 justify-around flex-wrap-reverse gap-5">
        <div className=" flex flex-col min-w-96 max-w-[50%] flex-1 items-start justify-between ">
          <h1 className="text-[#1E1F4B] text-xl md:text-[2.5rem] not-italic font-bold leading-[3.25rem] tracking-[0.0125rem] capitalize font-popins">
            How we can help you
          </h1>
          <h2 className="text-[#1B1D21] text-base md:text-xl not-italic font-normal leading-9 font-popins opacity-80">
            Follow our newsletter. We will regulary update our latest project
            and availability.
          </h2>
          <div className="relative mb-6 h-20 w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className=" w-6 h-6 text-[#2E3E5C]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-[#1B4896] opacity-10 h-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[#2E3E5C] text-base not-italic font-normal leading-[normal] font-popins"
              placeholder="Enter your Email Here"
            />
            <button className=" py-3 px-10 bg-blue-700 text-white rounded-xl absolute right-5 top-4 ">
              Subscribe
            </button>
          </div>
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
              className=" relative"
            >
              <rect
                opacity="0.15"
                width="50"
                height="50"
                rx="12"
                fill="#1B4896"
              />
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
            <h1 className="text-[#1E1F4B] text-xl not-italic font-semibold leading-7 font-popins">
              Interior Design
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
