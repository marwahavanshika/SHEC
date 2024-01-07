import Image from "next/image";

function LoadingScreen() {
  return (
    <div className="flex justify-center h-screen items-center">
      <Image
        width={1000}
        height={1000}
        className=" h-[300px] w-auto mt-20 animate-bounce max-w-full bg-white animate-infinite animate-duration-[75] object-contain"
        src={"/images/logo.png"}
        alt="image description"
      />
    </div>
  );
}

export default LoadingScreen;
