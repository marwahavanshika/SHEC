"use client"
import { ParallaxLayer, Parallax } from "@react-spring/parallax"
import { useScroll, animated, config } from "@react-spring/web";
import { useRef, useEffect, useState } from "react"

export default function Home() {
  const parallaxRef = useRef();

  const [page, setpage] = useState(-1)

  useEffect(() => {
    const handle = () => {
      if (parallaxRef.current && page != Math.round(parallaxRef.current.current / window.innerHeight)) {
        setpage(Math.round(parallaxRef.current.current / window.innerHeight))
      }
    }
    window.addEventListener('wheel', handle)
    return () => {
      window.removeEventListener('wheel', handle);
    }
  }, [])

  return (
    <div>
      <Parallax pages={8} ref={parallaxRef} className={' h-screen snap-y snap-mandatory'} config={config.stiff}>
        <ParallaxLayer offset={1} speed={0.25} className={' h-fit flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-10 px-10'}>
          <div className={'flex flex-col flex-1 p-10'}>
            <h1 className={'text-3xl md:text-5xl lg:text-7xl mb-4 font-bold'}>Welcome, SHEC</h1>
            <h1 className={'text-md md:text-lg lg:text-xl mb-16 md:mb-28'}>we bet you, you will wish to book all</h1>
            <p className={'text-blue-300 text-lg md:text-2xl lg:text-3xl'}>SHEC is an innovative engineering consultancy with a creative team of architects, designers, planners, and engineers offering diverse professional services beyond traditional boundaries.</p>
          </div>
          <div className={'grid grid-cols-3 gap-5 md:gap-10 flex-1 min-w-[30rem] px-5'}>
            {[1,2,3,4,5,6,7,8,9].map((value)=>(
              <div key={value} className={'bg-gradient-to-b from-blue-600 via-sky-500 to-blue-400 font-poppins text-white min-w-10 aspect-video rounded-lg flex items-center justify-center'}>
                Card {value}
              </div>
            ))}
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 2, end: 4 }} style={{ color: parallaxRef.current?.offset == 2 ? 'white' : 'black' }} className={'h-screen w-[50vw] bg-transparent flex flex-col p-32 justify-start items-start'}>
          <h1 className={'text-5xl'}>We Design for</h1>
          <h1 className={'text-7xl'} style={{ color: (page == 2) ? 'white' : 'black' }} >Layouts</h1>
          <h1 className={'text-7xl'} style={{ color: (page == 3) ? 'white' : 'black' }} >Buildings</h1>
          <h1 className={'text-7xl'} style={{ color: (page == 4) ? 'white' : 'black' }} >Stadiums</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={2} className={'h-screen bg-blue-500'}></ParallaxLayer>
        <ParallaxLayer offset={3} className={'h-screen bg-blue-500'}></ParallaxLayer>
        <ParallaxLayer offset={4} className={'h-screen bg-blue-500'}></ParallaxLayer>

        <ParallaxLayer offset={5} className={'h-screen bg-purple-500'}></ParallaxLayer>
        <ParallaxLayer offset={6} className={'h-screen bg-orange-400'}></ParallaxLayer>
        <ParallaxLayer offset={7} className={'h-screen bg-black'}></ParallaxLayer>
      </Parallax>
    </div>
  )
}

