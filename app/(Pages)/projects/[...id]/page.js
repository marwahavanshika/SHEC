import Image from "next/image";
import Link from "next/link";
import Heading from "../../../../components/Heading";

const page = ({ params }) => {
  const im = "/images/" + params.id.join("/");

  const validFirstValues = [
    "COMMERCIAL",
    "RESIDENTIAL",
    "INDUSTRIAL",
    "PUBLIC_BUILDINGS",
  ];

  const next = validFirstValues.filter((value) => {
    return value != params.id[0];
  });
  return (
    <>
      <div
        className=" h-screen w-screen bg-cover bg-center flex items-center justify-start relative"
      >
        <Image width={1000} height={1000} alt="bg" src={'/head.jpg'} className=" absolute w-full h-full inset-0 object-cover"/>
        <Heading />
      </div>
      <div className="flex flex-col py-2 ps-2 md:p-10 items-center md:items-stretch gap-5 justify-center mt-5 md:flex-row">
        <div className="flex flex-col h-1/2 md:h-full w-full min-w-[70%] md:min-w-[45%] gap-5 flex-grow">
          <h1 className="text-[#214181] text-sm md:text-xl not-italic font-medium leading-[normal] tracking-[2.91px] font-popins">
            INTERIOR DESIGN
          </h1>
          <h2 className="text-[#2B2B2B] text-2xl md:text-5xl capitalize not-italic font-semibold leading-[47px]">
            we offer a complete A to Z services encompassing world className
            design skills.
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
              <path
                d="M30.5318 38.8724H19.1285C18.3744 38.8724 17.7491 38.2471 17.7491 37.493C17.7491 36.7389 18.3744 36.1136 19.1285 36.1136H30.5318C32.4997 36.1136 34.4309 34.4765 34.762 32.5269L37.2082 17.8867C37.4289 16.5625 36.6934 14.6679 35.6634 13.8402L22.9173 3.651C21.4459 2.47389 18.9998 2.47387 17.5468 3.63259L4.8009 13.8402C3.75253 14.6863 3.03523 16.5625 3.25594 17.8867L3.77092 20.9949C3.89967 21.7489 3.3847 22.4662 2.63062 22.5766C1.87653 22.7237 1.17764 22.1904 1.04889 21.4363L0.533906 18.3465C0.147667 16.0659 1.25123 13.1415 3.07207 11.6885L15.818 1.48061C18.2825 -0.505767 22.1632 -0.487356 24.6462 1.49902L37.3921 11.6885C39.1946 13.1415 40.2981 16.0659 39.9303 18.3465L37.4841 32.9867C36.9323 36.2421 33.824 38.8724 30.5318 38.8724Z"
                fill="#214181"
              />
              <path
                d="M7.35652 39.2221C6.60244 39.2221 5.99549 38.6151 5.9771 37.8794C5.92192 35.3964 4.28502 33.7595 1.80205 33.7043C1.04797 33.686 0.440999 33.0606 0.459392 32.2881C0.477784 31.5341 1.08473 30.9455 1.83882 30.9455H1.87558C5.82994 31.0375 8.66238 33.8515 8.73595 37.8058C8.75434 38.5599 8.14738 39.2037 7.39329 39.2221C7.3749 39.2221 7.37492 39.2221 7.35652 39.2221Z"
                fill="#214181"
              />
              <path
                d="M12.8742 39.222C12.1201 39.222 11.4948 38.6151 11.4948 37.861C11.4764 36.6471 11.2741 35.4884 10.9062 34.4032C9.96821 31.7179 7.96344 29.7314 5.27816 28.775C4.19301 28.3887 3.03429 28.1866 1.8204 28.1866C1.06631 28.1866 0.440988 27.5612 0.45938 26.7888C0.45938 26.0347 1.08472 25.4277 1.83881 25.4277H1.8572C3.38376 25.4461 4.83674 25.7036 6.19778 26.1818C9.67393 27.4141 12.2673 30.0074 13.4995 33.4836C13.9777 34.8446 14.2352 36.316 14.2536 37.8242C14.2536 38.5967 13.6467 39.222 12.8742 39.222Z"
                fill="#214181"
              />
              <path
                d="M1.83924 39.6819C0.809264 39.6819 0 38.8542 0 37.8427C0 36.8311 0.827656 36.0034 1.83924 36.0034C2.85082 36.0034 3.67847 36.8311 3.67847 37.8427C3.67847 38.8542 2.86921 39.6819 1.83924 39.6819Z"
                fill="#214181"
              />
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
              <path
                d="M42 16.4855V31.5433C42 34.0089 40.6791 36.2984 38.5437 37.5532L25.4672 45.1041C23.3318 46.3369 20.6901 46.3369 18.5327 45.1041L5.45625 37.5532C3.32086 36.3204 2 34.0309 2 31.5433V16.4855C2 14.0199 3.32086 11.7303 5.45625 10.4755L18.5327 2.9246C20.6681 1.6918 23.3098 1.6918 25.4672 2.9246L38.5437 10.4755C40.6791 11.7303 42 13.9979 42 16.4855Z"
                stroke="#214181"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.0101 21.8132C24.8431 21.8132 27.1395 19.5165 27.1395 16.6837C27.1395 13.8508 24.8431 11.5544 22.0101 11.5544C19.1773 11.5544 16.8809 13.8508 16.8809 16.6837C16.8809 19.5165 19.1773 21.8132 22.0101 21.8132Z"
                stroke="#214181"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30.8166 34.2734C30.8166 30.3108 26.876 27.0967 22.0108 27.0967C17.1456 27.0967 13.2051 30.3108 13.2051 34.2734"
                stroke="#214181"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
        <div className="flex flex-row h-1/2 md:h-full items-stretch justify-centre min-w-[70%] md:min-w-[45%] gap-5 max-w-[50%] flex-grow">
          <div className=" w-1/2 flex items-end">
            <Image
              width={1000}
              height={1000}
              className=" w-full h-[90%] object-cover shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)] rounded-[30px]"
              src={`${im}/1.jpg`}
              alt="project"
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-2 gap-5">
            <Image
              width={1000}
              height={1000}
              className="w-full h-1/2 shrink-0 object-cover shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)] rounded-[30px]"
              src={`${im}/2.jpg`}
              alt="project"
            />
            <Image
              width={1000}
              height={1000}
              className="w-full shrink-0 h-[40%] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)] rounded-[30px]"
              src={`${im}/3.jpg`}
              alt="project"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-center">
        <div className="flex flex-col max-w-7xl py-2">
          <div className="flex flex-col justify-start items-start ms-2">
            <div className="text-[#214181] text-base md:text-[1.2125rem] font-popins not-italic font-medium leading-[normal] tracking-[0.18188rem]">
              CHECKOUT OUR NEW
            </div>
            <div className="text-[#2B2B2B] font-popins text-xl md:text-5xl not-italic font-semibold leading-[2.9375rem]">
              Latest Listed Properties
            </div>
            <div className="text-[#808080] font-popins text-base not-italic font-normal leading-[1.625rem]">
              Meet the team member who have contributed their designs for this
              websites.
            </div>
          </div>
          <div className="flex items-center justify-center flex-wrap flex-row gap-5 lg:gap-10 space-x-4 space-y-2">
            {next.map((value, index) => (
              <div className="flex-col px-6 py-2 " key={index}>
                <Link
                  className=" block h-80 w-80 rounded-2xl overflow-hidden bg-gray-200 cursor-pointer"
                  href={`/projects/${value}/1`}
                >
                  <Image
                    src={`/images/${value}/1/1.jpg`}
                    alt="project"
                    width={1000}
                    height={1000}
                    className=" object-cover w-full h-full"
                  />
                </Link>

                <div className="text-[#2B2B2B] font-popins text-xl not-italic font-medium leading-[normal]">
                  {value}
                </div>
                <div className="text-[#808080] text-base not-italic font-normal leading-[1.625rem] font-popins">
                  GETMAX
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
