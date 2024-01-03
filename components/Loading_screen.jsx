import React from "react";

function LoadingScreen() {
  return (
    <div className="flex justify-center h-screen items-center">
      <img
        className=" h-[300px] mt-20 animate-bounce  max-w-full bg-white animate-infinite animate-duration-2000 animate-delay-[100ms]"
        src={"/images/logo.png"}
        alt="image description"
      />
    </div>
  );
}

export default LoadingScreen;
