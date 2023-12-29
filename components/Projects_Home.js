const imgs =[
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
]

export default function Gallery() {
  return (
    <div className="flex justify-center items-center h-screen gap-2 md:gap-5 slider">
      {imgs.map((value,i)=>(
        <img 
        src={value}
        className={"w-8 md:w-20 object-cover filter grayscale hover:grayscale-0 transform transition-all duration-500 ease-in-out flex-grow-0 hover:w-[16rem] hover:h-[300px] md:hover:h-[400px] hover:transition-all hover:duration-500 hover:ease-in-out"}
        alt="Random"
        key={i}
        />
      ))}
    </div>
  );
};



