import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const about = [
    "Alumni",
    "Sustainability",
    "Fellows Program",
    "Innovation Blog",
    "Investor Relations",
    "Press Releases",
  ];
  const company = [
    "Home",
    "Achievements",
    "Projects",
    "Services",
    "Join Us",
    "Perks",
    "Contact Us",
  ];
  const category = [
    "Home",
    "Achievements",
    "Projects",
    "Services",
    "Join Us",
    "Perks",
    "Contact Us",
  ];

  return (
    <footer className="text-gray-600 body-font bg-[#1d3969] mt-10">
      <div className="container px-10 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left items-center justify-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image
              width={1000}
              height={1000}
              src={"/images/logo.png"}
              alt="Logo"
              className=" object-cover w-[300px] brightness-150"
            />
          </Link>
          <p className=" text-center text-white font-popins text-xl font-bold">
            Share Your Vision, <br />{" "}
            <span className=" ms-16"> We Bring It to Life!</span>
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-white text-[17.737px] not-italic font-bold leading-[normal] font-almarai">
              About Us
            </h2>
            <nav className="list-none mb-10">
              {about.map((names, i) => (
                <li key={i}>
                  <a className="text-white opacity-80 text-[13.796px] font-[200] hover:text-white">
                    {names}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-white text-[17.737px] not-italic font-bold leading-[normal] font-almarai">
              Company
            </h2>
            <nav className="list-none mb-10">
              {company.map((value, i) => (
                <li key={i}>
                  <a className="text-white opacity-80 text-[13.796px] font-[200] hover:text-white">
                    {value}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-white text-[17.737px] not-italic font-bold leading-[normal] font-almarai">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              {category.map((value, i) => (
                <li key={i}>
                  <a className="text-white opacity-80 text-[13.796px] font-[200] hover:text-white">
                    {value}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h1 className="text-white text-[17.737px] not-italic font-bold leading-[normal] font-almarai mb-2">
              Social
            </h1>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link
                href={
                  "https://www.facebook.com/share/siD8LAHCnwvc3HUT/?mibextid=%22%22"
                }
                className="text-white hover:scale-150 transition ease-out"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link
                href={"https://www.linkedin.com/company/silver-heights-uae/"}
                className="ml-7 text-white hover:scale-150 transition ease-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 310 310"
                  height="20"
                  width="20"
                  fill="#fff"
                >
                  <g id="SVGRepo_iconCarrier">
                    <path d="M72.16 99.73H9.927c-2.762 0-5 2.239-5 5v199.928c0 2.762 2.238 5 5 5H72.16c2.762 0 5-2.238 5-5V104.73C77.16 101.969 74.922 99.73 72.16 99.73z" />
                    <path d="M41.066 0.341C18.422 0.341 0 18.743 0 41.362c0 22.619 18.422 41.038 41.066 41.038 22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692 0.341 41.066 0.341z" />
                    <path d="M230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762 0-5 2.239-5 5v199.928c0 2.762 2.238 5 5 5h62.097c2.762 0 5-2.238 5-5v-98.918c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204c0 2.762 2.238 5 5 5H305c2.762 0 5-2.238 5-5V194.995C310 145.43 300.549 94.761 230.454 94.761z" />
                  </g>
                </svg>
              </Link>
              <Link
                href={
                  "https://www.instagram.com/silver_heights_uae?igsh=MXZnMDZwODN3eTU4ZA=="
                }
                className="ml-7 text-white hover:scale-150 transition ease-out"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link
                href={
                  "https://www.tiktok.com/@silverheights.uae?_t=8j4w3PWPJWa&_r=1"
                }
                className="ml-7 text-white hover:scale-150 transition ease-out"
              >
                <svg
                  fill="#ffffff"
                  className=" w-5 h-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  strokeWidth="0"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
                  </g>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
