
import Image from "next/image";
const imgs = [
  {link:"/images/carousal4.jpg",type:"FCA",name:"Katty",post:"Fashion Director"},
  {link:"/images/carousal3.jpg",type:"INTERIOR",name:"Katty",post:"Fashion Director"},
  {link:"/images/COMMERCIAL/EXTERIOR/1/4.jpg",type:"TOWER",name:"Katty",post:"Fashion Director"},
  {link:"/images/carousal1.jpg",type:"MAJLIS",name:"ISLAMIC MAJLIS",post:"Fashion Director"},
  {link:"/images/COMMERCIAL/INTERIOR/4/2.jpg",type:"CAFE",name:"Katty",post:"Fashion Director"},
  {link:"/images/COMMERCIAL/INTERIOR/8/3.jpg",type:"OFFICE",name:"Katty",post:"Fashion Director"},
  {link:"/images/carousal7.jpg",type:"LIVING",name:"Katty",post:"Fashion Director"},
]

export default function Gallery() {
  return (
    <div className="flex relative justify-center items-center h-screen gap-1 md:gap-2 slider">
      {imgs.map((value, i) => (
        <div key={i} className="w-6 group relative md:w-20 hover:w-[14rem] md:hover:w-[25rem] hover:h-[300px] md:hover:h-[400px] hover:transition-all hover:duration-500 hover:ease-in-out transform transition-all duration-500 ease-in-out flex-grow-0  focus:w-[16rem] md:focus:w-[25rem] focus:h-[300px] md:focus:h-[400px] focus:transition-all focus:duration-500 focus:ease-in-out active:w-[16rem] md:active:w-[25rem] active:h-[300px] md:active:h-[400px] active:transition-all active:duration-500 active:ease-in-out">
          <Image
            width={1000}
            height={1000}
            src={value.link}
            className={
              " w-full h-full object-cover rounded"
            }
            alt="Random"
            key={i}
          />
          <div className=" absolute inset-0 z-10 bg-[rgba(0,0,0,0.5)] group-hover:bg-transparent group-hover:transition-all group-hover:duration-500 transition-all duration-500 text-white text-base md:text-[1.6685rem] not-italic font-bold leading-[165%] tracking-[0.95106rem] capitalize font-popins flex items-center justify-center"><span className=" -rotate-90 group-hover:opacity-0 group-hover:transition-all group-hover:duration-500 transition-all duration-500">{value.type}</span></div>
          <div className=" opacity-0 group-hover:opacity-100 absolute bottom-5 left-5 group-hover:transition-all group-hover:duration-500 transition-all duration-500">
            <h1 className="text-white text-lg md:text-xl not-italic font-bold leading-[165%] capitalize font-popins">{value.name}</h1>
            <h2 className="text-white text-base md:text-lg not-italic font-normal leading-[0.859rem] tracking-[0.01544rem]">{value.post}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
