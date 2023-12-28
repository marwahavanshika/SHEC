"use client"
import { useState } from "react"
const length = 8
const items = [...new Array(length).keys()]
const z = length * 50
  
export default function Carousal() {
  const [index, setIndex] = useState(0)
  
  const angle = index / length * -360;
  const transform = `translateZ(-${z}px) rotateY(${angle}deg)`
  
  return (
    <div className={' w-[300px] h-[185px] relative mx-auto my-10 perspective'}>
      <div className="w-[300px] threed h-[185px] absolute transition-transform duration-[400ms] will-change-transform left-0 top-0" style={{ transform }}>
          {items.map((id) => (
            <img
              alt=""
              key={id}
              className={"absolute w-[300px] h-[185px] flex items-center justify-center shadow-[0px_8px_16px_rgba(0,0,0,0.1)] rounded-lg border-4 border-solid border-[white] left-0 top-0"}
              style={{ transform: getTransform(id) }}
              src={`https://picsum.photos/500/350?image=${(id + 5) * 11}`}
            />  
          ))}
      </div>
      
      <div
        className="w-[300px] h-[185px] absolute left-0 top-0 threed"
        style={{ transform: `translateZ(-${z}px) rotateY(0deg)` }}
      >
        <button
          style={{ transform: getTransform(length - 1) }}
          onClick={() => setIndex(index - 1)}
          className={'absolute w-[$width] h-[$height] opacity-0 cursor-pointer rounded-lg border-4 border-solid border-[white] left-0.5 top-0.5 active:opacity-10'}
        />
        <button
          style={{ transform: getTransform(1) }}
          onClick={() => setIndex(index + 1)}
        />
      </div>
    </div>
  )
}

function getTransform(id) {
  const deg = id * (360 / length)
  return `rotateY(${deg}deg) translateZ(${z}px)`
}
