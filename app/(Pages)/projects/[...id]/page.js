
const page = ({params}) => {
  const im= '/images/' + params.id.join('/')
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              We offer a complete A to Z services encompassing world className
              design skills
            </h1>
            <p className="leading-relaxed text-base">
              Locavore cardigan small batch roof party blue bottle blog meggings
              sartorial jean shorts kickstarter migas sriracha church-key synth
              succulents. Actually taiyaki neutra, distillery gastropub pok pok
              ugh.
            </p>
            
            <div className="flex">
              <div className="flex md:flex-row flex-col p-4 space-x-4 space-y-2 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
                
                <div className=" w-[70%] md:w-1/2 bg-gray-200 py-10 rounded-2xl flex items-center justify-center ml-4">
                  <div className="flex-col  items-center px-0 md:px-6">
                    
                    <div className="text-md mt-8 font-bold text-gray-800">
                      Tailblocks has 128% new impressions this year
                    </div>
                    <div className="text-xs font-medium text-gray-800">
                      Tailblocks has more than 15k+ visitors per month.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="flex flex-wrap list-none -mb-1">
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Fifth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Sixth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Seventh Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Eighth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center text-center">
        <div className="flex flex-col p-2 m-2  max-w-7xl  ">
          <div className="flex flex-col justify-start items-start">
            <div className="text-xl md:text-3xl font-medium">Meet Our Team</div>
            <div className="text-sm mx-2 md:text-sm text-stone-500">
              Meet the team member who have contributed their designs for this
              websites.
            </div>
          </div>
          <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2 p-2">
            <div className="flex-col px-6 py-2 ">
              <div className="h-80 w-60 rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src={im+'/1.jpg'}
                  alt=""
                  className=" object-cover w-full h-full"
                />
              </div>

              <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                John Doe
              </div>
              <div className=" italic text-gray-500">CEO, Tailblocks</div>
            </div>
            <div className="flex-col px-6 py-2 ">
              <div className="h-80 w-60 rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?boy"
                  alt=""
                  className=""
                />
              </div>

              <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Arkay
              </div>
              <div className=" italic text-gray-500">Executive Producer</div>
            </div>
            <div className="flex-col px-6 py-2 ">
              <div className="h-80 w-60 rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src="https://source.unsplash.com/300x300/?girl"
                  alt=""
                  className=""
                />
              </div>

              <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                Elina Gilbert
              </div>
              <div className=" italic text-gray-500">HR</div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>

      <div>
        <div className="flex items-center justify-center">
          <div className="flex-col items-center justify-center text-gray-800 text-center">
            

          </div>
        </div>
        <script src="https://cdn.tailwindcss.com"></script>
      </div>
    </>
  );
};

export default page;
