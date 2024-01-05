function Contact() {
  return (
    <form className="flex flex-col p-4 gap-5 md:gap-10">
      {["Name", "Email", "Phone No."].map((label, i) => (
        <div className="relative flex-1 px-2 h-10" key={i}>
          <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-1 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 focus:border-[#0487C9]"
            placeholder=" "
            required
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-popins !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-[#0487C9] before:border-blue-gray-200 peer-focus:before:!border-[#0487C9] after:border-blue-gray-200 peer-focus:after:!border-[#0487C9] text-[#828282] text-[0.7975rem] not-italic font-normal leading-[1.36713rem] tracking-[0.008rem]">
            {label}
            {i == 1 ? <></> : <span className="text-red-500">*</span>}
          </label>
        </div>
      ))}
      <div>
        <select
          id="countries"
          defaultValue={"How did you find us?"}            
          className="text-black  w-full min-w-[200px] shrink h-10 outline outline-1 text-[0.7975rem] not-italic font-normal leading-[1.36713rem] tracking-[0.008rem] font-[Montserrat]"
        >
          <option
            hidden
          >
            How did you find us?
          </option>
          <option value="FB">Facebook</option>
          <option value="IN">Instagram</option>
          <option value="X">Twitter</option>
          <option value="TK">Tik-Tok</option>
        </select>
      </div>
      <button
        className={
          "h-10 w-full min-w-[150px] bg-[#1B4896] px-2 text-white text-[0.91144rem] not-italic font-bold leading-[normal] uppercase font-[Montserrat]"
        }
      >
        SEND
      </button>
      <div className={"flex flex-row gap-3 justify-around"}>
        <div className={"flex flex-col md:flex-row gap-5 "}>
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame 831">
              <path
                id="&#239;&#138;&#160;"
                d="M14.859 1.27002V3.02765C16.5974 3.02765 18.2261 3.46706 19.7449 4.34588C21.1906 5.20638 22.3434 6.35983 23.2035 7.80621C24.0819 9.32583 24.5211 10.9553 24.5211 12.6946H26.2778C26.2778 10.6258 25.7563 8.70334 24.7132 6.9274C23.7067 5.20638 22.3434 3.84239 20.6233 2.83541C18.8483 1.79182 16.9268 1.27002 14.859 1.27002ZM5.77337 3.90647C5.27928 3.90647 4.84925 4.06209 4.48326 4.37334L1.65601 7.25695L1.73835 7.20203C1.28087 7.58651 0.97893 8.06254 0.832535 8.63011C0.704439 9.19767 0.741038 9.74693 0.942331 10.2779C1.45471 11.706 2.14094 13.1707 3.00101 14.672C4.20877 16.7408 5.64527 18.5992 7.31051 20.247C9.98222 22.9383 13.3036 25.0621 17.2745 26.6184H17.302C17.8327 26.8015 18.3633 26.8381 18.894 26.7282C19.443 26.6184 19.9279 26.3804 20.3488 26.0142L23.1212 23.2404C23.4872 22.8743 23.6702 22.4257 23.6702 21.8947C23.6702 21.3455 23.4872 20.8878 23.1212 20.5216L19.5253 16.8965C19.1594 16.5303 18.7019 16.3472 18.1529 16.3472C17.6039 16.3472 17.1464 16.5303 16.7804 16.8965L15.0511 18.6541C13.6604 17.995 12.4526 17.1803 11.4279 16.2099C10.4031 15.2212 9.58878 14.022 8.9849 12.6122L10.7416 10.8546C11.1259 10.4518 11.3181 9.97579 11.3181 9.42653C11.3181 8.85896 11.0985 8.40125 10.6593 8.05338L10.7416 8.13577L7.06347 4.37334C6.69748 4.06209 6.26745 3.90647 5.77337 3.90647ZM14.859 4.78528V6.54292C15.9753 6.54292 17 6.81755 17.9333 7.36681C18.8849 7.91607 19.6351 8.66672 20.1841 9.61877C20.7331 10.5525 21.0076 11.5778 21.0076 12.6946H22.7643C22.7643 11.2666 22.4075 9.93917 21.6938 8.71249C20.9801 7.52243 20.0286 6.57038 18.8391 5.85634C17.6131 5.1423 16.2864 4.78528 14.859 4.78528ZM5.77337 5.6641C5.82826 5.6641 5.89231 5.69156 5.96551 5.74649L9.56133 9.42653C9.57963 9.49977 9.56133 9.56385 9.50644 9.61877L6.89878 12.2003L7.09092 12.7496L7.44776 13.5185C7.74055 14.141 8.07909 14.7452 8.46337 15.3311C8.99405 16.155 9.57963 16.8599 10.2201 17.4457C11.0802 18.2879 12.1141 19.0569 13.3219 19.7526C13.9257 20.1005 14.4381 20.3568 14.859 20.5216L15.408 20.7688L18.0705 18.1048C18.1071 18.0682 18.1346 18.0499 18.1529 18.0499C18.1712 18.0499 18.1986 18.0682 18.2352 18.1048L21.9409 21.8123C21.9775 21.849 21.9958 21.8764 21.9958 21.8947C21.9958 21.8947 21.9775 21.913 21.9409 21.9497L19.196 24.6685C18.7934 25.0164 18.3542 25.1079 17.8784 24.9431C14.1453 23.4967 11.0344 21.5194 8.54572 19.0111C7.00857 17.4732 5.66357 15.7247 4.51071 13.7657C3.68724 12.3559 3.04676 10.9919 2.58927 9.6737V9.64624C2.51608 9.48146 2.50693 9.28922 2.56183 9.06951C2.61672 8.8315 2.71737 8.64841 2.86377 8.52025L5.58122 5.74649C5.63612 5.69156 5.70017 5.6641 5.77337 5.6641ZM14.859 8.30055V10.0582C15.591 10.0582 16.2132 10.3145 16.7255 10.8271C17.2379 11.3398 17.4941 11.9623 17.4941 12.6946H19.2509C19.2509 11.9074 19.0496 11.175 18.647 10.4976C18.2627 9.82017 17.732 9.28922 17.0549 8.90474C16.3779 8.50194 15.6459 8.30055 14.859 8.30055Z"
                fill="black"
              />
            </g>
          </svg>
          <h1
            className={
              "text-black text-[0.74056rem] not-italic font-semibold leading-[1.13931rem] tracking-[0.01481rem] font-[Montserrat]"
            }
          >
            PHONE
            <br />
            <span className="text-[#1b4896] text-[0.74056rem] not-italic font-normal leading-[1.13931rem] tracking-[0.01481rem] font-[Montserrat]">
              +971 50 9999 611
            </span>
          </h1>
        </div>
        <div className={"flex flex-col md:flex-row gap-5"}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.9415 7.64844C24.8847 6.36015 24.6763 5.47447 24.3779 4.70701C24.07 3.89237 23.5964 3.16302 22.9758 2.55671C22.3695 1.94097 21.6354 1.46251 20.8302 1.15945C20.0583 0.86101 19.1772 0.652678 17.8889 0.595877C16.591 0.534266 16.179 0.52002 12.8871 0.52002C9.59527 0.52002 9.18323 0.534266 7.89013 0.591067C6.60184 0.647868 5.71616 0.856385 4.94888 1.15464C4.13406 1.46251 3.40472 1.93616 2.79841 2.55671C2.18266 3.16302 1.70439 3.89718 1.40114 4.70238C1.10271 5.47447 0.894377 6.35534 0.837577 7.64363C0.775965 8.94154 0.761719 9.35358 0.761719 12.6454C0.761719 15.9373 0.775965 16.3493 0.832766 17.6424C0.889567 18.9307 1.09808 19.8164 1.39652 20.5839C1.70439 21.3985 2.18266 22.1279 2.79841 22.7342C3.40472 23.3499 4.13887 23.8284 4.94407 24.1314C5.71616 24.4299 6.59703 24.6382 7.8855 24.695C9.17842 24.752 9.59064 24.7661 12.8825 24.7661C16.1744 24.7661 16.5864 24.752 17.8795 24.695C19.1678 24.6382 20.0535 24.4299 20.8207 24.1314C22.4502 23.5014 23.7385 22.2132 24.3685 20.5839C24.6667 19.8118 24.8752 18.9307 24.932 17.6424C24.9888 16.3493 25.0031 15.9373 25.0031 12.6454C25.0031 9.35358 24.9983 8.94154 24.9415 7.64844ZM22.7581 17.5477C22.7059 18.7318 22.507 19.3713 22.3412 19.7975C21.9338 20.8538 21.0955 21.6921 20.0392 22.0996C19.6129 22.2653 18.9689 22.4642 17.7894 22.5162C16.5105 22.5732 16.127 22.5873 12.8919 22.5873C9.65688 22.5873 9.26852 22.5732 7.9943 22.5162C6.81017 22.4642 6.17075 22.2653 5.74446 22.0996C5.21883 21.9053 4.74037 21.5974 4.35201 21.1948C3.94941 20.8016 3.64154 20.328 3.44727 19.8024C3.28149 19.3761 3.0826 18.7318 3.03061 17.5525C2.97362 16.2737 2.95956 15.8899 2.95956 12.6549C2.95956 9.41982 2.97362 9.03146 3.03061 7.75742C3.0826 6.5733 3.28149 5.93387 3.44727 5.50758C3.64154 4.98176 3.94941 4.50348 4.35682 4.11494C4.7498 3.71234 5.22345 3.40447 5.74928 3.21038C6.17556 3.04461 6.8198 2.84571 7.99911 2.79354C9.27796 2.73674 9.66169 2.72249 12.8966 2.72249C16.1364 2.72249 16.52 2.73674 17.7942 2.79354C18.9783 2.84571 19.6177 3.04461 20.044 3.21038C20.5697 3.40447 21.0481 3.71234 21.4365 4.11494C21.8391 4.50811 22.147 4.98176 22.3412 5.50758C22.507 5.93387 22.7059 6.57792 22.7581 7.75742C22.8149 9.03627 22.8291 9.41982 22.8291 12.6549C22.8291 15.8899 22.8149 16.2689 22.7581 17.5477Z"
              fill="black"
            />
            <path
              d="M12.8886 6.41699C9.45006 6.41699 6.66016 9.20671 6.66016 12.6455C6.66016 16.0842 9.45006 18.874 12.8886 18.874C16.3274 18.874 19.1171 16.0842 19.1171 12.6455C19.1171 9.20671 16.3274 6.41699 12.8886 6.41699ZM12.8886 16.6857C10.6579 16.6857 8.84838 14.8764 8.84838 12.6455C8.84838 10.4145 10.6579 8.60522 12.8886 8.60522C15.1196 8.60522 16.9289 10.4145 16.9289 12.6455C16.9289 14.8764 15.1196 16.6857 12.8886 16.6857Z"
              fill="black"
            />
            <path
              d="M20.8146 6.17087C20.8146 6.97385 20.1635 7.62494 19.3603 7.62494C18.5573 7.62494 17.9062 6.97385 17.9062 6.17087C17.9062 5.3677 18.5573 4.7168 19.3603 4.7168C20.1635 4.7168 20.8146 5.3677 20.8146 6.17087Z"
              fill="black"
            />
          </svg>
          <h1
            className={
              "text-black text-[0.74056rem] not-italic font-semibold leading-[1.13931rem] tracking-[0.01481rem] font-[Montserrat]"
            }
          >
            INSTAGRAM
            <br />
            <span className="text-[#1b4896] text-[0.74056rem] not-italic font-normal leading-[1.13931rem] tracking-[0.01481rem] font-[Montserrat]">
              silverheights.eng
            </span>
          </h1>
        </div>
        <div className={'flex flex-col md:flex-row gap-5'}>
          <svg
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49484 3.27588V5.07252L1.83984 8.75416V24.0109H24.4598V8.75416L18.8048 5.07252V3.27588H7.49484ZM9.37984 5.16088H16.9198V12.4063L13.1498 14.851L9.37984 12.4063V5.16088ZM10.3223 7.04588V8.93088H15.9773V7.04588H10.3223ZM7.49484 7.31096V11.1693L4.52008 9.25486L7.49484 7.31096ZM18.8048 7.31096L21.7796 9.25486L18.8048 11.1693V7.31096ZM10.3223 9.87338V11.7584H15.9773V9.87338H10.3223ZM3.72484 10.9926L13.1498 17.0894L22.5748 10.9926V22.1259H3.72484V10.9926Z"
              fill="black"
            />
          </svg>
          <h1
            className={
              "text-black text-[0.74056rem] not-italic font-semibold leading-[1.13931rem] tracking-[0.01481rem] font-[Montserrat]"
            }
          >
            EMAIL
            <br />
            <span className="text-[#1b4896] text-[0.74056rem] not-italic font-normal leading-[1.13931rem] tracking-[0.01481rem] font-[Montserrat]">
            info@shec.ae
            </span>
          </h1>
        </div>
      </div>
    </form>
  );
}

export default Contact;
