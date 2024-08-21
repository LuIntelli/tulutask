import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars, FaHome, FaPhoneAlt, FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <header className=" flex relative justify-between bg-black flex-wrap md:flex-nowrap px-10 py-5 items-center text-white ">
      <svg
        width="123"
        height="16"
        viewBox="0 0 123 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8749 0.00417101C12.0959 0.291971 12.4797 0.792492 13.0177 1.50991C13.5558 2.22315 14.1814 3.06152 14.8989 4.0292C15.6163 4.9927 16.3879 6.03545 17.2179 7.14912C18.048 8.26695 18.8655 9.36809 19.6747 10.4526C20.4838 11.537 21.2471 12.5631 21.9562 13.5308C22.6653 14.4943 23.2659 15.3034 23.7456 15.9583H20.926C20.9135 15.9416 20.7758 15.7581 20.5089 15.3994C20.2419 15.0407 19.8957 14.5777 19.4703 14.0104C19.0448 13.439 18.561 12.7967 18.0229 12.0751C17.4849 11.3535 16.9343 10.6111 16.3712 9.85193C15.8081 9.09281 15.2576 8.35037 14.7195 7.62878C14.1814 6.9072 13.7018 6.26486 13.2805 5.70177C12.8592 5.13869 12.5214 4.68405 12.2586 4.33368C12 3.98332 11.8707 3.80813 11.8707 3.80813L4.69239 13.4682H16.2127L18.0688 15.9499H0L11.8707 0L11.8749 0.00417101Z"
          fill="#FFCC00"
        />
        <path
          d="M25.3 13.4223H44.4825C44.7286 13.4223 44.9664 13.3639 45.1874 13.2513C45.4085 13.1387 45.6004 12.9844 45.763 12.7967C45.9257 12.6048 46.0508 12.3837 46.1426 12.1251C46.2344 11.8665 46.2802 11.5954 46.2802 11.3034C46.2802 10.7112 46.1051 10.2148 45.763 9.81022C45.4168 9.40563 45.0039 9.20542 44.5201 9.20542H29.1958C28.7119 9.20542 28.2406 9.09281 27.7776 8.8634C27.3146 8.634 26.9017 8.317 26.5347 7.90824C26.1676 7.49948 25.8756 7.01564 25.6546 6.4609C25.4335 5.90615 25.3209 5.30136 25.3209 4.65068V4.55892C25.3209 3.92075 25.4294 3.3243 25.6462 2.76955C25.8631 2.21481 26.1509 1.73097 26.5096 1.32221C26.8684 0.913452 27.2813 0.588113 27.7484 0.354536C28.2198 0.120959 28.7119 0 29.2333 0H48.3991V2.48175H29.25C28.9914 2.46507 28.7536 2.50678 28.5368 2.60688C28.3199 2.70699 28.1322 2.85297 27.9653 3.04484C27.7985 3.23671 27.6692 3.45777 27.5774 3.72054C27.4857 3.97915 27.4398 4.25443 27.4398 4.5464C27.4398 4.8342 27.4857 5.11366 27.5774 5.37226C27.6692 5.63087 27.7985 5.86027 27.957 6.04797C28.1197 6.23983 28.3073 6.39416 28.5284 6.50678C28.7495 6.6194 28.9872 6.67779 29.2333 6.67779H44.4909C44.9872 6.67779 45.4669 6.79875 45.934 7.04067C46.4054 7.28259 46.8225 7.6121 47.1854 8.02086C47.5482 8.42962 47.8402 8.91762 48.0613 9.48071C48.2823 10.0438 48.3949 10.6444 48.3949 11.2826C48.3949 11.9208 48.2948 12.5172 48.0905 13.072C47.8861 13.6267 47.6066 14.1147 47.2479 14.5401C46.8892 14.9656 46.4763 15.2993 46.0008 15.5412C45.5253 15.7831 45.0164 15.9041 44.47 15.9041H25.3042V13.4223H25.3Z"
          fill="#FFCC00"
        />
        <path
          d="M49.9536 13.4223H69.1361C69.3822 13.4223 69.6199 13.3639 69.841 13.2513C70.0621 13.1387 70.2539 12.9844 70.4166 12.7967C70.5793 12.6048 70.7044 12.3837 70.7962 12.1251C70.8879 11.8665 70.9338 11.5954 70.9338 11.3034C70.9338 10.7112 70.7586 10.2148 70.4124 9.81022C70.0662 9.40563 69.6533 9.20542 69.1695 9.20542H53.8452C53.3613 9.20542 52.89 9.09281 52.427 8.8634C51.964 8.634 51.5511 8.317 51.1841 7.90824C50.8212 7.49948 50.525 7.01564 50.304 6.4609C50.0829 5.90615 49.9703 5.30136 49.9703 4.65068V4.55892C49.9703 3.92075 50.0787 3.3243 50.2956 2.76955C50.5125 2.21481 50.8003 1.73097 51.159 1.32221C51.5177 0.913452 51.9307 0.588113 52.3978 0.354536C52.8692 0.120959 53.3613 0 53.8827 0H73.0485V2.48175H53.8994C53.6408 2.46507 53.403 2.50678 53.1861 2.60688C52.9693 2.70699 52.7816 2.85297 52.6147 3.04484C52.4479 3.23671 52.3186 3.45777 52.2268 3.72054C52.1351 3.97915 52.0892 4.25443 52.0892 4.5464C52.0892 4.8342 52.1351 5.11366 52.2268 5.37226C52.3186 5.63087 52.4479 5.86027 52.6064 6.04797C52.769 6.23983 52.9567 6.39416 53.1778 6.50678C53.3989 6.6194 53.6366 6.67779 53.8827 6.67779H69.1403C69.6366 6.67779 70.1163 6.79875 70.5834 7.04067C71.0548 7.28259 71.4719 7.6121 71.8347 8.02086C72.1976 8.42962 72.4896 8.91762 72.7107 9.48071C72.9317 10.0438 73.0443 10.6444 73.0443 11.2826C73.0443 11.9208 72.9401 12.5172 72.7399 13.072C72.5355 13.6267 72.256 14.1147 71.8973 14.5401C71.5386 14.9656 71.1257 15.2993 70.6502 15.5412C70.1747 15.7831 69.6658 15.9041 69.1194 15.9041H49.9536V13.4223Z"
          fill="#FFCC00"
        />
        <path
          d="M74.6028 13.4932H97.7561V16H74.6028V13.4932ZM97.7561 0.0250261V2.50678H74.6028V0L97.7561 0.0208551V0.0250261ZM96.6424 6.76955V9.23045H74.6028V6.76955H96.6424Z"
          fill="#FFCC00"
        />
        <path
          d="M99.3105 2.50678V0H122.422V2.50678H111.907V15.9499H109.792V2.50678H99.3105Z"
          fill="#FFCC00"
        />
      </svg>
      <FaBars className="absolute md:hidden bar lg:hidden cursor-pointer right-10 text-xl text-yellow-500" />
      <nav className=" hidden nav lg:flex md:flex w-4/6 justify-between">
        <ul className="flex gap-10 font-medium w-2/4">
          <Link href={"/"} className=" flex items-center gap-2 ">
            Solution
          </Link>
          <Link href={"/about"} className=" flex items-center gap-2">
            Features
          </Link>
          <Link href={"/about"} className=" flex items-center gap-2">
            Developer
          </Link>
          <Link href={"/contactus"} className="flex items-center gap-2">
            Support{" "}
            <span className="p-2 rounded-full bg-[#FFD900] relative -top-5  text-[#0F0F0F] text-[8px]  -left-10 ">
              coming soon
            </span>
          </Link>
        </ul>
        <div className="aside flex  gap-5 items-center">
       
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 6.25V6.2625M21.25 8.75V8.7625M23.75 15V15.0125M21.25 21.25V21.2625M15 23.75V23.7625M8.75 21.25V21.2625M6.25 15V15.0125M8.75 8.75V8.7625M11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6516C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6516C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <button className=" bg-[#000000] px-[41px] py-[11px] border-[#FFD900] border rounded-[5px]  ">
          sign up
        </button>
        <button className=" text-[#000000] bg-[#FFD900] px-[41px] py-[11px] rounded-[5px]">Download</button> 
      </div>
      </nav>

      
    </header>
  );
};

export default NavBar;