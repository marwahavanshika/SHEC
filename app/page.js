"use client"; // Serverside rendering overriden ,
import Image from "next/image";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import { useRef, useEffect, useState } from "react";
import Animation from "../components/Animation";
import Card from "../components/Blog";
import Gallery from "../components/Projects_Home";
import Contact from "../components/Contact";
import Heading from "../components/Heading";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingScreen from "../components/Loading_screen";
import { useSpring,animated, config } from "@react-spring/web";

export default function Home() {
  const parallaxRef = useRef();
  const [page, setpage] = useState(-1);
  const [isloading, setIsLoading] = useState(true);

  const props = useSpring({
    from: { opacity: 0, transform: "translateY(100%)" },
    to: { opacity: 1, transform: "translateY(0)" },
    immediate: isloading,
    config:config.slow
  });


  useEffect(() => {
    
    const handle = () => {
      if (
        parallaxRef.current &&
        page !== Math.round(parallaxRef.current.current / window.innerHeight)
        ) {
          setpage(Math.round(parallaxRef.current.current / window.innerHeight));
        }
      };
      
      window.addEventListener("touchmove", handle);
      window.addEventListener("wheel", handle);
      const fakeDataFetch = () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      };
  
    fakeDataFetch();
  
    return () => {
      window.removeEventListener("wheel", handle);
      window.removeEventListener("touchmove", handle);
    };
  }, [page, parallaxRef]);
  
  const secondsection = [
    "Master Planing",
    "Architectural Design",
    "Structural Design",
    "Supervision",
    "Interior Design",
    "MEP Design",
    "Authorities Approval",
    "Project Management",
    "Landscape Design",
  ];

  return (
    <>
      {isloading ? (
        <LoadingScreen />
      ) : (
        <animated.div style={props} className=" h-screen">
          <Parallax pages={8} ref={parallaxRef}>
            <ParallaxLayer
              className="z-20"
              style={{ height: "100px" }}
              sticky={{ start: 0, end: 8 }}
            >
              <Navbar />
            </ParallaxLayer>
            <ParallaxLayer
              className=" relative flex items-center justify-start"
            >
              <Image src={'/head.jpg'} alt={'Main'} width={1000} height={1000} className=" absolute w-screen h-screen object-cover" />
              <Heading />
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              className={
                " h-fit flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-10 px-10"
              }
            >
              <div className={"flex flex-col flex-1 p-10"}>
                <h1
                  className={"text-4xl md:text-5xl lg:text-7xl mb-4 font-bold"}
                >
                  Welcome, SHEC
                </h1>
                <h1 className={"text-xl md:text-lg lg:text-xl mb-16 md:mb-28"}>
                  We Design, You Delight.
                </h1>
                <p className={"text-[#0487C9] text-lg md:text-2xl lg:text-3xl"}>
                  SHEC is an innovative engineering consultancy with a creative
                  team of architects, designers, planners, and engineers
                  offering diverse professional services beyond traditional
                  boundaries.
                </p>
              </div>
              <div
                className={
                  "grid grid-cols-3 gap-2 md:gap-10 flex-1 p-2 md:p-10"
                }
              >
                {secondsection.map((value) => (
                  <div
                    key={value}
                    className={
                      "bg-gradient-to-b from-[#1B4896]  to-[#24A6E0] p-2 font-poppins text-white min-w-3 w-full aspect-video rounded-lg flex items-center justify-center text-base md:text-xl text-center font-popins font-semibold"
                    }
                  >
                    {value}
                  </div>
                ))}
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              sticky={{ start: 2, end: 4 }}
              style={{
                color: parallaxRef.current?.offset == 2 ? "white" : "black",
              }}
              className={
                "h-screen w-[50vw] bg-transparent flex flex-col lg:flex-row gap-10 p-20 items-center justify-center"
              }
            >
              <div className="flex-1 flex flex-col gap-5 md:gap-10">
                <h1
                  className={
                    "text-black pe-5 md:ps-16 text-4xl md:text-[4.4375rem] not-italic font-normal leading-[3.99rem] font-roboto"
                  }
                >
                  We Design for
                </h1>
                <h1
                  className={
                    "text-center text-6xl md:text-[6.25rem] not-italic font-normal leading-[3.99rem]"
                  }
                  style={{
                    color:
                      page == 2 ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.40)",
                  }}
                >
                  Layouts
                </h1>
                <h1
                  className={
                    "text-center text-6xl md:text-[6.25rem] not-italic font-normal leading-[3.99rem]"
                  }
                  style={{
                    color:
                      page == 3 ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.40)",
                  }}
                >
                  Buildings
                </h1>
                <h1
                  className={
                    "text-center text-6xl md:text-[6.25rem] not-italic font-normal leading-[3.99rem]"
                  }
                  style={{
                    color:
                      page == 4 ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0.40)",
                  }}
                >
                  Stadiums
                </h1>
              </div>
              <div className="flex-1">
                <Animation stateNumber={page - 1} className={"h-full w-full"} />
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={2}
              className={"h-screen bg-[#0487C9]"}
            ></ParallaxLayer>
            <ParallaxLayer
              offset={3}
              className={"h-screen bg-[#0487C9] "}
            ></ParallaxLayer>
            <ParallaxLayer
              offset={4}
              className={"h-screen bg-[#0487C9]"}
            ></ParallaxLayer>

            <ParallaxLayer
              offset={5}
              className={" flex flex-col items-center pt-20 justify-center"}
              // speed={0.25}
            >
              <h2
                className={
                  "text-black text-center shrink text-xl md:text-[1.2125rem] not-italic font-medium leading-[normal] tracking-[0.18188rem] uppercase font-popins "
                }
              >
                some of our works
              </h2>
              <h1
                className={
                  "text-black text-center shrink text-4xl md:text-[2.4875rem] not-italic font-semibold leading-[2.9375rem] font-sans"
                }
              >
                Our Past Projects
              </h1>
              <Gallery />
              <h4>
                <Link
                  className={
                    "text-[#0487C9] text-center shrink text-lg not-italic font-medium leading-[normal] tracking-[0.18188rem] lowercase font-popins"
                  }
                  href={"/projects"}
                >
                  see more
                </Link>
              </h4>
            </ParallaxLayer>
            <ParallaxLayer
              offset={6}
              className={"flex flex-col items-center justify-center "}
              // speed={0.25}
            >
              <h2
                className={
                  "text-black text-center text-xl md:text-[1.2125rem] not-italic font-medium leading-[normal] tracking-[0.18188rem] uppercase"
                }
              >
                WHAT'S TRENDING
              </h2>
              <h1
                className={
                  "text-black text-center text-3xl md:text-[2.4875rem] not-italic font-semibold leading-[2.9375rem]"
                }
              >
                Latest Blogs & Posts
              </h1>
              <div
                className={
                  "flex flex-row items-center gap-10 md:gap-20 mt-10 justify-center"
                }
              >
                <Card />
                <Card className={"hidden md:block"} />
                <Card className={"hidden xl:block"} />
              </div>
              <h3>
                <Link
                  className={
                    "text-[#1B4896] text-center text-base not-italic font-normal leading-[2.9375rem] font-popins"
                  }
                  href={"/blogs"}
                >
                  Load more
                </Link>
              </h3>
            </ParallaxLayer>
            <ParallaxLayer
              offset={7}
              className={
                "flex flex-row flex-wrap items-center justify-around gap-5 md:gap-16 p-8"
              }
            >
              <div
                className={
                  "flex flex-col flex-1 item-start px-10 justify-start max-w-[28.07725rem]"
                }
              >
                <h1
                  className={
                    "text-black text-4xl md:text-[3.07606rem] not-italic font-bold leading-[normal] font-popins"
                  }
                >
                  Contact{" "}
                  <span
                    className={
                      "text-[#1B4896] text-4xl md:text-[3.07606rem] not-italic font-bold leading-[normal] font-popins"
                    }
                  >
                    us
                  </span>
                </h1>
                <h2
                  className={
                    " text-black text-sm md:text-[0.7975rem] not-italic font-semibold leading-[1.36713rem] tracking-[0.008rem] font-popins"
                  }
                >
                  Connect with us for seamless collaboration and expert
                  solutions - where innovation meets excellence.
                </h2>
                <Contact />
              </div>
              <div className="w-[28.07725rem] h-[36.0625rem] min-h-96 shrink">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5267467.328243882!2d79.79308074695561!3d24.895329786126055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1703830862216!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={"w-full h-full rounded-md"}
                ></iframe>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              sticky={{ start: 8, end: 8 }}
              style={{ height: "10px" }}
            >
              <Footer />
            </ParallaxLayer>
          </Parallax>
        </animated.div>
      )}
    </>
  );
}
