"use client";

const page = () => {
  const im= '/images/' + params.id.join('/')

  function checkArrayConditions(arr) {
    const validFirstValues = ['COMMERCIAL', 'RESIDENTIAL', 'INDUSTRIAL', 'PUBLIC_BUILDINGS'];
    const validSecondValues = ['EXTERIOR', 'INTERIOR'];
  
    return (
      (arr.length === 2 || arr.length === 3) &&
      typeof arr[0] === 'string' &&
      validFirstValues.includes(arr[0]) &&
      (arr.length === 2
        ? !isNaN(arr[1]) && parseInt(arr[1]) >= 1 && parseInt(arr[1]) <= 10
        : typeof arr[1] === 'string' &&
          validSecondValues.includes(arr[1]) &&
          !isNaN(arr[2]) &&
          parseInt(arr[2]) >= 1 &&
          parseInt(arr[2]) <= 10)
    );
  }
  return (
    <>
      <div className="flex flex-row items-center justify-center m-3 md:m-10 flex-wrap overflow-x-hidden">
        {/* First Column */}
        <div className="flex flex-col h-full min-w-[400px] max-w-[50%] gap-4 flex-grow">
          <h1 className="text-[#214181] text-sm md:text-xl not-italic font-medium leading-[normal] tracking-[2.91px] font-popins">
            INTERIOR DESIGN
          </h1>
          <h2 className="text-[#2B2B2B] text-2xl md:text-5xl capitalize not-italic font-semibold leading-[47px]">
            we offer a complete A to Z services encompassing world className design
            skills.
          </h2>
          <p className=" text-[#808080] text-sm md:text-base not-italic font-normal leading-[26px]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
            malesuada leo volutpat.
          </p>
          <div className=" w-[80%] h-32 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.06)] flex flex-row justify-evenly items-center rounded-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              {/* ... (SVG path for the first icon) ... */}
            </svg>
            <div className="flex flex-col">
              <p className="text-[#214181] text-[19.4px] not-italic font-medium leading-[normal]">
                Donec porttitor euismod
              </p>
              <p className="text-[color:var(--Text-Colour-3,#808080)] text-base not-italic font-normal leading-[26px]">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </p>
            </div>
          </div>
          <div className=" w-[80%] h-32 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.06)] flex flex-row justify-evenly items-center rounded-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="48"
              viewBox="0 0 44 48"
              fill="none"
            >
              {/* ... (SVG path for the second icon) ... */}
            </svg>
            <div className="flex flex-col">
              <p className="text-[#214181] text-[19.4px] not-italic font-medium leading-[normal]">
                Donec porttitor euismod
              </p>
              <p className="text-[color:var(--Text-Colour-3,#808080)] text-base not-italic font-normal leading-[26px]">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-row items-stretch justify-centre p-10 min-w-[400px] gap-5 max-w-[50%] flex-grow">
          {/* Large Image */}
          <div className=" w-1/2 flex items-end" >
            <img
              className=" w-full h-[90%] object-cover shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)] rounded-[30px]"
              src={"/images/rec1.jpeg"}
              alt=""
            />
          </div>

          {/* Container for Two Smaller Images */}
          <div className="flex flex-col w-1/2 space-y-2 gap-5">
            {/* First Smaller Image */}
            <img
              className="w-full shrink-0 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)] rounded-[30px]"
              src={"/images/rec2.jpeg"}
              alt=""
            />

            {/* Second Smaller Image */}
            <img
              className="w-full shrink-0 h-[40%] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)] rounded-[30px]"
              src={"/images/rec3.jpeg"}
              alt=""
            />
          </div>
        </div>
      </div>

      {/*       
      <div className="flex flex-row flex-1 gap-5 min-w-96 ">
            <img
              className=" w-1/2  object-cover shrink-0 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)] translate-y-5 rounded-[30px]"
              src={"/images/rec1.jpeg"}
            />
            <div className="flex flex-col gap-5 flex-1 w-1/2 -translate-y-10 ">
              <img
                className="w-full shrink-0 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)] rounded-[30px]"
                src={"/images/rec2.jpeg"}
                alt=""
              />
              <img
                className="w-full h-[40%] shrink-0 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)] rounded-[30px]"
                src={"/images/rec3.jpeg"}
                alt=""
              />
            </div>
          </div> */}

      <div className="flex items-center justify-center text-center">
        <div className="flex flex-col p-2 m-2  max-w-7xl  ">
          <div className="flex flex-col justify-start items-start">
            <div className="text-xl md:text-3xl font-medium">Meet Our Team</div>
            <div className="text-sm mx-2 md:text-sm text-stone-500">
              Meet the team member who have contributed their designs for this
              websites.
            </div>
          </div>
          <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2 p-2">
            <div className="flex-col px-6 py-2 ">
              <div className="h-80 w-60 rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?man,businessman"
                  alt=""
                  className=""
                />
              </div>

              <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                John Doe
              </div>
              <div className=" italic text-gray-500">CEO, Tailblocks</div>
            </div>
            <div className="flex-col px-6 py-2 ">
              <div className="h-80 w-60 rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?boy"
                  alt=""
                  className=""
                />
              </div>

              <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Arkay
              </div>
              <div className=" italic text-gray-500">Executive Producer</div>
            </div>
            <div className="flex-col px-6 py-2 ">
              <div className="h-80 w-60 rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?girl"
                  alt=""
                  className=""
                />
              </div>

              <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Elina Gilbert
              </div>
              <div className=" italic text-gray-500">HR</div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>

      <div>
        <div className="flex items-center justify-center">
          <div className="flex-col items-center justify-center text-gray-800 text-center"></div>
        </div>
      </div>
    </>
  );
};

export default page;
