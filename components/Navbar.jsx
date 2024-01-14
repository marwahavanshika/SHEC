"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const links = [
    { name: "Projects", link: "projects" },
    { name: "Services", link: "services" },
    { name: "Blogs", link: "blogs" },
    { name: "About Us", link: "About_Us" },
  ];
  const [isCopied, setisCopied] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const handleclick = () => {
    navigator.clipboard.writeText("+971 50 9999 611");
    setisCopied(true);
    setTimeout(() => {
      setisCopied(false);
    }, 5000);
  };
  const handlescroll = () => {};
  return (
    <header
      className={
        "h-20 fixed w-full flex flex-row items-center justify-evenly bg-white shadow-2xl z-20"
      }
    >
      <Link href={"/"}>
        <Image
          width={200}
          height={200}
          src={"/images/logo.png"}
          alt="LOGO"
          className=" w-[200px] h-auto"
        />
      </Link>
      {links.map((link, i) => (
        <Link
          href={link.link}
          key={i}
          className={
            " h-1/2 w-[140px] hidden lg:grid hover:bg-white hover:text-[#1B4896] hover:border-[3px] hover:border-[#1B4896]  place-items-center bg-[#1B4896] text-white font-popins rounded-md transition-colors duration-200 ease-out hover:font-semibold "
          }
        >
          {link.name}
        </Link>
      ))}
      <div className={"hidden lg:flex justify-center items-center gap-1"}>
        <svg
          width="27"
          height="27"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.49484 3.27588V5.07252L1.83984 8.75416V24.0109H24.4598V8.75416L18.8048 5.07252V3.27588H7.49484ZM9.37984 5.16088H16.9198V12.4063L13.1498 14.851L9.37984 12.4063V5.16088ZM10.3223 7.04588V8.93088H15.9773V7.04588H10.3223ZM7.49484 7.31096V11.1693L4.52008 9.25486L7.49484 7.31096ZM18.8048 7.31096L21.7796 9.25486L18.8048 11.1693V7.31096ZM10.3223 9.87338V11.7584H15.9773V9.87338H10.3223ZM3.72484 10.9926L13.1498 17.0894L22.5748 10.9926V22.1259H3.72484V10.9926Z"
            fill="#1B4896"
          />
        </svg>
        <h1
          className={
            "text-black text-[0.74056rem] not-italic font-semibold leading-[1.13931rem] tracking-[0.01481rem] font-[Montserrat]"
          }
        >
          <span className="text-[#1b4896] text-xs not-italic font-normal leading-[1.13931rem] tracking-[0.01481rem] font-[Montserrat]">
            info@shec.ae
          </span>
        </h1>
      </div>
      <Link
        href={"/"}
        className={
          " h-1/2 peer w-[150px] hidden lg:flex transition-all duration-200 ease-out items-center justify-center rounded-3xl bg-[#fff]"
        }
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="#1B4896"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 831">
            <path
              id="&#239;&#138;&#160;"
              d="M14.859 1.27002V3.02765C16.5974 3.02765 18.2261 3.46706 19.7449 4.34588C21.1906 5.20638 22.3434 6.35983 23.2035 7.80621C24.0819 9.32583 24.5211 10.9553 24.5211 12.6946H26.2778C26.2778 10.6258 25.7563 8.70334 24.7132 6.9274C23.7067 5.20638 22.3434 3.84239 20.6233 2.83541C18.8483 1.79182 16.9268 1.27002 14.859 1.27002ZM5.77337 3.90647C5.27928 3.90647 4.84925 4.06209 4.48326 4.37334L1.65601 7.25695L1.73835 7.20203C1.28087 7.58651 0.97893 8.06254 0.832535 8.63011C0.704439 9.19767 0.741038 9.74693 0.942331 10.2779C1.45471 11.706 2.14094 13.1707 3.00101 14.672C4.20877 16.7408 5.64527 18.5992 7.31051 20.247C9.98222 22.9383 13.3036 25.0621 17.2745 26.6184H17.302C17.8327 26.8015 18.3633 26.8381 18.894 26.7282C19.443 26.6184 19.9279 26.3804 20.3488 26.0142L23.1212 23.2404C23.4872 22.8743 23.6702 22.4257 23.6702 21.8947C23.6702 21.3455 23.4872 20.8878 23.1212 20.5216L19.5253 16.8965C19.1594 16.5303 18.7019 16.3472 18.1529 16.3472C17.6039 16.3472 17.1464 16.5303 16.7804 16.8965L15.0511 18.6541C13.6604 17.995 12.4526 17.1803 11.4279 16.2099C10.4031 15.2212 9.58878 14.022 8.9849 12.6122L10.7416 10.8546C11.1259 10.4518 11.3181 9.97579 11.3181 9.42653C11.3181 8.85896 11.0985 8.40125 10.6593 8.05338L10.7416 8.13577L7.06347 4.37334C6.69748 4.06209 6.26745 3.90647 5.77337 3.90647ZM14.859 4.78528V6.54292C15.9753 6.54292 17 6.81755 17.9333 7.36681C18.8849 7.91607 19.6351 8.66672 20.1841 9.61877C20.7331 10.5525 21.0076 11.5778 21.0076 12.6946H22.7643C22.7643 11.2666 22.4075 9.93917 21.6938 8.71249C20.9801 7.52243 20.0286 6.57038 18.8391 5.85634C17.6131 5.1423 16.2864 4.78528 14.859 4.78528ZM5.77337 5.6641C5.82826 5.6641 5.89231 5.69156 5.96551 5.74649L9.56133 9.42653C9.57963 9.49977 9.56133 9.56385 9.50644 9.61877L6.89878 12.2003L7.09092 12.7496L7.44776 13.5185C7.74055 14.141 8.07909 14.7452 8.46337 15.3311C8.99405 16.155 9.57963 16.8599 10.2201 17.4457C11.0802 18.2879 12.1141 19.0569 13.3219 19.7526C13.9257 20.1005 14.4381 20.3568 14.859 20.5216L15.408 20.7688L18.0705 18.1048C18.1071 18.0682 18.1346 18.0499 18.1529 18.0499C18.1712 18.0499 18.1986 18.0682 18.2352 18.1048L21.9409 21.8123C21.9775 21.849 21.9958 21.8764 21.9958 21.8947C21.9958 21.8947 21.9775 21.913 21.9409 21.9497L19.196 24.6685C18.7934 25.0164 18.3542 25.1079 17.8784 24.9431C14.1453 23.4967 11.0344 21.5194 8.54572 19.0111C7.00857 17.4732 5.66357 15.7247 4.51071 13.7657C3.68724 12.3559 3.04676 10.9919 2.58927 9.6737V9.64624C2.51608 9.48146 2.50693 9.28922 2.56183 9.06951C2.61672 8.8315 2.71737 8.64841 2.86377 8.52025L5.58122 5.74649C5.63612 5.69156 5.70017 5.6641 5.77337 5.6641ZM14.859 8.30055V10.0582C15.591 10.0582 16.2132 10.3145 16.7255 10.8271C17.2379 11.3398 17.4941 11.9623 17.4941 12.6946H19.2509C19.2509 11.9074 19.0496 11.175 18.647 10.4976C18.2627 9.82017 17.732 9.28922 17.0549 8.90474C16.3779 8.50194 15.6459 8.30055 14.859 8.30055Z"
              fill="#1B4896"
            />
          </g>
        </svg>
        <div className=" text-xs text-[#1B4896]">
          +971 50 9999 611
          <br />
          050 9999 611
        </div>
      </Link>
      <div
        className={
          " absolute hidden rounded-md peer-hover:flex w-32 h-14 transition-all duration-200 ease-out border-[3px] border-[#1B4896] bg-white -bottom-full right-1/2 before:absolute before:w-[20px] before:h-[20px] before:content-[''] before:-rotate-[135deg] before:border-l-0 before:border-r-2 before:border-t-0 before:border-b-2 before:border-solid before:border-[#1B4896] before:bg-white before:left-2/4 before:bottom-[85%] items-center justify-center text-sm text-[#1B4896]  "
        }
      >
        {isCopied ? (
          <span className="text-xs">Copied to Clipboard</span>
        ) : (
          <>Click to Copy</>
        )}
      </div>
      <button
        onClick={() => handlescroll()}
        className={
          "h-[30px] w-[110px] cursor-pointer border-2 group hidden lg:flex items-center justify-center border-[#1B4896] text-xs text-[#1B4896] rounded-2xl"
        }
      >
        Contact-Us
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={
            " group-hover:translate-x-2 group-hover:transition-all group-hover:duration-200 group-hover:ease-out transition-all duration-200 ease-in"
          }
        >
          <path
            d="M15.586 10.657L11.636 6.70704C11.4538 6.51844 11.353 6.26584 11.3553 6.00364C11.3576 5.74144 11.4628 5.49063 11.6482 5.30522C11.8336 5.11981 12.0844 5.01465 12.3466 5.01237C12.6088 5.01009 12.8614 5.11088 13.05 5.29304L18.707 10.95C18.8002 11.0427 18.8741 11.1529 18.9246 11.2742C18.9751 11.3955 19.001 11.5256 19.001 11.657C19.001 11.7884 18.9751 11.9186 18.9246 12.0399C18.8741 12.1612 18.8002 12.2714 18.707 12.364L13.05 18.021C12.9578 18.1166 12.8474 18.1927 12.7254 18.2451C12.6034 18.2976 12.4722 18.3251 12.3394 18.3263C12.2066 18.3274 12.0749 18.3021 11.952 18.2519C11.8291 18.2016 11.7175 18.1273 11.6236 18.0334C11.5297 17.9395 11.4555 17.8279 11.4052 17.705C11.3549 17.5821 11.3296 17.4504 11.3307 17.3176C11.3319 17.1849 11.3595 17.0536 11.4119 16.9316C11.4643 16.8096 11.5405 16.6993 11.636 16.607L15.586 12.657H6C5.73478 12.657 5.48043 12.5517 5.29289 12.3641C5.10536 12.1766 5 11.9223 5 11.657C5 11.3918 5.10536 11.1375 5.29289 10.9499C5.48043 10.7624 5.73478 10.657 6 10.657H15.586Z"
            fill="#1B4896"
          />
        </svg>
      </button>
      <svg
        width="50px"
        height="50px"
        viewBox="-2.4 -2.4 28.80 28.80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#1B4896"
        transform="rotate(0)"
        className=" cursor-pointer flex lg:hidden"
        onClick={() => setisOpen(true)}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g clipPath="url(#1B4896clip0_429_11066)">
            {" "}
            <path
              d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
              stroke="#1B4896"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>{" "}
          <defs>
            {" "}
            <clipPath id="clip0_429_11066">
              {" "}
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.000915527)"
              ></rect>{" "}
            </clipPath>{" "}
          </defs>{" "}
        </g>
      </svg>
      <div
        className="h-screen shadow-2xl z-50 w-screen absolute top-0 right-0 bg-white flex items-center flex-col justify-start transition-transform duration-[1000ms] ease-out gap-10"
        style={{ transform: isOpen ? "translateX(0%)" : "translateX(110%)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="SvgjsSvg1011"
          width="50"
          height="50"
          version="1.1"
          className=" cursor-pointer absolute top-2 right-5"
          onClick={() => setisOpen(false)}
        >
          <defs id="SvgjsDefs1012" />
          <g id="SvgjsG1013">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 92 92"
              width="50"
              height="50"
            >
              <path
                d="M70.7 64.3c1.8 1.8 1.8 4.6 0 6.4-.9.9-2 1.3-3.2 1.3-1.2 0-2.3-.4-3.2-1.3L46 52.4 27.7 70.7c-.9.9-2 1.3-3.2 1.3s-2.3-.4-3.2-1.3c-1.8-1.8-1.8-4.6 0-6.4L39.6 46 21.3 27.7c-1.8-1.8-1.8-4.6 0-6.4 1.8-1.8 4.6-1.8 6.4 0L46 39.6l18.3-18.3c1.8-1.8 4.6-1.8 6.4 0 1.8 1.8 1.8 4.6 0 6.4L52.4 46l18.3 18.3z"
                fill="#1B4896"
              />
            </svg>
          </g>
        </svg>
        <nav className="  h-[200px] w-[min(150px,90%)] min-w-[150px] mt-32 flex flex-col gap-5 ">
          <Link
            href={"/"}
            className={
              "w-full h-full grid place-items-center border-2 border-[#1B4896] bg-[#1B4896] rounded text-white hover:bg-white hover:text-[#1B4896] hover:border-2 hover:border-[#1B4896] transition-colors duration-200 ease-out hover:font-semibold "
            }
            onClick={() => setisOpen(false)}
          >
            Home
          </Link>
          {links.map((value, i) => (
            <Link
              href={`/${value.link}`}
              key={i}
              className={
                "w-full h-full grid place-items-center border-2 border-[#1B4896] bg-[#1B4896] rounded text-white hover:bg-white hover:text-[#1B4896] hover:border-2 hover:border-[#1B4896] transition-colors duration-200 ease-out hover:font-semibold "
              }
              onClick={() => setisOpen(false)}
            >
              <span>{value.name}</span>
            </Link>
          ))}
        </nav>
        <div className=" flex flex-col gap-2 justify-end">
          <button
            onClick={() => handlescroll()}
            className="h-[30px] w-[110px] cursor-pointer border-2 group flex items-center justify-center border-[#1B4896] text-xs text-[#1B4896] rounded-2xl"
          >
            Contact-Us
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" group-hover:translate-x-2 group-hover:transition-all group-hover:duration-200 group-hover:ease-out transition-all duration-200 ease-in"
            >
              <path
                d="M15.586 10.657L11.636 6.70704C11.4538 6.51844 11.353 6.26584 11.3553 6.00364C11.3576 5.74144 11.4628 5.49063 11.6482 5.30522C11.8336 5.11981 12.0844 5.01465 12.3466 5.01237C12.6088 5.01009 12.8614 5.11088 13.05 5.29304L18.707 10.95C18.8002 11.0427 18.8741 11.1529 18.9246 11.2742C18.9751 11.3955 19.001 11.5256 19.001 11.657C19.001 11.7884 18.9751 11.9186 18.9246 12.0399C18.8741 12.1612 18.8002 12.2714 18.707 12.364L13.05 18.021C12.9578 18.1166 12.8474 18.1927 12.7254 18.2451C12.6034 18.2976 12.4722 18.3251 12.3394 18.3263C12.2066 18.3274 12.0749 18.3021 11.952 18.2519C11.8291 18.2016 11.7175 18.1273 11.6236 18.0334C11.5297 17.9395 11.4555 17.8279 11.4052 17.705C11.3549 17.5821 11.3296 17.4504 11.3307 17.3176C11.3319 17.1849 11.3595 17.0536 11.4119 16.9316C11.4643 16.8096 11.5405 16.6993 11.636 16.607L15.586 12.657H6C5.73478 12.657 5.48043 12.5517 5.29289 12.3641C5.10536 12.1766 5 11.9223 5 11.657C5 11.3918 5.10536 11.1375 5.29289 10.9499C5.48043 10.7624 5.73478 10.657 6 10.657H15.586Z"
                fill="#1B4896"
              />
            </svg>
          </button>
          <div className={"flex flex-col items-center md:flex-row gap-5"}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49484 3.27588V5.07252L1.83984 8.75416V24.0109H24.4598V8.75416L18.8048 5.07252V3.27588H7.49484ZM9.37984 5.16088H16.9198V12.4063L13.1498 14.851L9.37984 12.4063V5.16088ZM10.3223 7.04588V8.93088H15.9773V7.04588H10.3223ZM7.49484 7.31096V11.1693L4.52008 9.25486L7.49484 7.31096ZM18.8048 7.31096L21.7796 9.25486L18.8048 11.1693V7.31096ZM10.3223 9.87338V11.7584H15.9773V9.87338H10.3223ZM3.72484 10.9926L13.1498 17.0894L22.5748 10.9926V22.1259H3.72484V10.9926Z"
                fill="black"
              />
            </svg>
            <h1
              className={
                "text-black text-[0.74056rem] not-italic font-semibold leading-[1.13931rem] tracking-[0.01481rem] font-[Montserrat]"
              }
            >
              <span className="text-[#1b4896] text-[0.74056rem] not-italic font-normal leading-[1.13931rem] tracking-[0.01481rem] font-[Montserrat]">
                info@shec.ae
              </span>
            </h1>
          </div>
        </div>
        <button
          onClick={() => handleclick()}
          className=" h-[50px] peer w-[150px] flex transition-all duration-200 ease-out items-center justify-center gap-1 rounded-3xl bg-[#1B4896]"
        >
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame 831">
              <path
                id="&#239;&#138;&#160;"
                d="M14.859 1.27002V3.02765C16.5974 3.02765 18.2261 3.46706 19.7449 4.34588C21.1906 5.20638 22.3434 6.35983 23.2035 7.80621C24.0819 9.32583 24.5211 10.9553 24.5211 12.6946H26.2778C26.2778 10.6258 25.7563 8.70334 24.7132 6.9274C23.7067 5.20638 22.3434 3.84239 20.6233 2.83541C18.8483 1.79182 16.9268 1.27002 14.859 1.27002ZM5.77337 3.90647C5.27928 3.90647 4.84925 4.06209 4.48326 4.37334L1.65601 7.25695L1.73835 7.20203C1.28087 7.58651 0.97893 8.06254 0.832535 8.63011C0.704439 9.19767 0.741038 9.74693 0.942331 10.2779C1.45471 11.706 2.14094 13.1707 3.00101 14.672C4.20877 16.7408 5.64527 18.5992 7.31051 20.247C9.98222 22.9383 13.3036 25.0621 17.2745 26.6184H17.302C17.8327 26.8015 18.3633 26.8381 18.894 26.7282C19.443 26.6184 19.9279 26.3804 20.3488 26.0142L23.1212 23.2404C23.4872 22.8743 23.6702 22.4257 23.6702 21.8947C23.6702 21.3455 23.4872 20.8878 23.1212 20.5216L19.5253 16.8965C19.1594 16.5303 18.7019 16.3472 18.1529 16.3472C17.6039 16.3472 17.1464 16.5303 16.7804 16.8965L15.0511 18.6541C13.6604 17.995 12.4526 17.1803 11.4279 16.2099C10.4031 15.2212 9.58878 14.022 8.9849 12.6122L10.7416 10.8546C11.1259 10.4518 11.3181 9.97579 11.3181 9.42653C11.3181 8.85896 11.0985 8.40125 10.6593 8.05338L10.7416 8.13577L7.06347 4.37334C6.69748 4.06209 6.26745 3.90647 5.77337 3.90647ZM14.859 4.78528V6.54292C15.9753 6.54292 17 6.81755 17.9333 7.36681C18.8849 7.91607 19.6351 8.66672 20.1841 9.61877C20.7331 10.5525 21.0076 11.5778 21.0076 12.6946H22.7643C22.7643 11.2666 22.4075 9.93917 21.6938 8.71249C20.9801 7.52243 20.0286 6.57038 18.8391 5.85634C17.6131 5.1423 16.2864 4.78528 14.859 4.78528ZM5.77337 5.6641C5.82826 5.6641 5.89231 5.69156 5.96551 5.74649L9.56133 9.42653C9.57963 9.49977 9.56133 9.56385 9.50644 9.61877L6.89878 12.2003L7.09092 12.7496L7.44776 13.5185C7.74055 14.141 8.07909 14.7452 8.46337 15.3311C8.99405 16.155 9.57963 16.8599 10.2201 17.4457C11.0802 18.2879 12.1141 19.0569 13.3219 19.7526C13.9257 20.1005 14.4381 20.3568 14.859 20.5216L15.408 20.7688L18.0705 18.1048C18.1071 18.0682 18.1346 18.0499 18.1529 18.0499C18.1712 18.0499 18.1986 18.0682 18.2352 18.1048L21.9409 21.8123C21.9775 21.849 21.9958 21.8764 21.9958 21.8947C21.9958 21.8947 21.9775 21.913 21.9409 21.9497L19.196 24.6685C18.7934 25.0164 18.3542 25.1079 17.8784 24.9431C14.1453 23.4967 11.0344 21.5194 8.54572 19.0111C7.00857 17.4732 5.66357 15.7247 4.51071 13.7657C3.68724 12.3559 3.04676 10.9919 2.58927 9.6737V9.64624C2.51608 9.48146 2.50693 9.28922 2.56183 9.06951C2.61672 8.8315 2.71737 8.64841 2.86377 8.52025L5.58122 5.74649C5.63612 5.69156 5.70017 5.6641 5.77337 5.6641ZM14.859 8.30055V10.0582C15.591 10.0582 16.2132 10.3145 16.7255 10.8271C17.2379 11.3398 17.4941 11.9623 17.4941 12.6946H19.2509C19.2509 11.9074 19.0496 11.175 18.647 10.4976C18.2627 9.82017 17.732 9.28922 17.0549 8.90474C16.3779 8.50194 15.6459 8.30055 14.859 8.30055Z"
                fill="#fff"
              />
            </g>
          </svg>
          <div className=" text-xs text-white">
            +971 50 9999 611
            <br />
            050 9999 611
          </div>
        </button>
        <div className="  hidden rounded-md peer-hover:flex w-32 h-14 transition-all duration-200 ease-out border-[3px] border-[#1B4896] bg-white -bottom-full right-1/2 items-center justify-center text-sm text-[#1B4896]  ">
          {isCopied ? (
            <span className="text-xs">Copied to Clipboard</span>
          ) : (
            <>Click to Copy</>
          )}
        </div>
      </div>
    </header>
  );
}
