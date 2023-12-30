"use client"
import { useState, useLayoutEffect } from "react"

export default function Carousal({length=4,links,className,direction=-1}) {
  const [index, setIndex] = useState(0)
  const items = [...new Array(length).keys()]
  const [size, setsize] = useState(window.innerWidth)
  const factor = size >=1024?56:size>=768?37:18
  const z = length * factor
  
  const angle = index / length * -360;
  const transform = `translateZ(-${z}px) rotateY(${angle}deg)`

  const [isHovered, setIsHovered] = useState(false);

  const resize=()=>{
    setsize(window.innerWidth);
  }

  useLayoutEffect(() => {
    let timer;

    const decreaseCount = () => {
      if (isHovered) {
        setIndex((prevCount) => prevCount +direction);
        timer = setTimeout(decreaseCount, 2000);
      }
    };

    decreaseCount();
    window.addEventListener('resize',resize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize',resize)
    };
  }, [isHovered]);

  function getTransform(id) {
    const deg = id * (360 / length)
    return `rotateY(${deg}deg) translateZ(${z}px)`
  }
  
  return (
    <div className={className}>
      <div className={'w-full h-full relative mx-auto my-10 perspective'} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} onTouchStart={()=>setIsHovered(true)}  onTouchEnd={()=>setIsHovered(false)}>
      <div className="w-full h-full threed absolute transition-transform duration-[400ms] will-change-transform left-0 top-0" style={{ transform }}>
          {items.map((id) => (
            <img
              alt=""
              key={id}
              className={"absolute w-full h-full flex items-center justify-center rounded-lg shadow-[4px_10px_30px_0px_rgba(0,0,0,0.06)] left-0 top-0"}
              style={{ transform: getTransform(id) }}
              src={links[id]}
            />  
          ))}
      </div>
      
      <div
        className="w-full h-full absolute left-0 top-0 threed"
        style={{ transform: `translateZ(-${z}px) rotateY(0deg)` }}
      >
      </div>
    </div>
    </div>
  )
}


