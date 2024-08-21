import Link from "next/link";
import React from "react";
import { FaCopy, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-black p-10 lg:px-[150px] md:px-[150px] pt-10">
      <div className="first flex md:flex-nowrap lg:flex-nowrap flex-wrap gap-10  justify-between mb-6 py-10">
        <div className="logo">
          <svg
            width="237"
            height="43"
            viewBox="0 0 237 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10.0276V1.70312H3.06567C4.61289 1.70312 5.38362 2.45053 5.38362 3.93502C5.38362 5.55353 4.33105 6.53804 2.21442 6.89885L2.01311 5.99165C3.56607 5.73908 4.34256 5.069 4.34256 3.98141C4.34256 3.05875 3.88817 2.59485 2.9794 2.59485H0.983546V10.0276H0.00575077H0Z"
              fill="#FFD900"
            />
            <path
              d="M7.28737 6.94881C7.28737 8.41784 7.84528 9.15493 8.95537 9.15493C10.0655 9.15493 10.6234 8.41784 10.6234 6.94881C10.6234 5.51071 10.0655 4.78908 8.95537 4.78908C7.84528 4.78908 7.28737 5.51071 7.28737 6.94881ZM6.30957 6.97458C6.30957 4.9334 7.18959 3.91797 8.95537 3.91797C10.7154 3.91797 11.6012 4.9334 11.6012 6.97458C11.6012 9.00544 10.7154 10.026 8.95537 10.026C7.20109 10.026 6.31532 9.0106 6.30957 6.97458Z"
              fill="#FFD900"
            />
            <path
              d="M12.3142 3.91797H13.2978L14.2871 8.70649L15.7307 3.91797H16.6108L18.158 8.70649L19.0437 3.91797H20.079L18.6354 10.0312H17.7381L16.1449 5.45916L14.6322 10.0312H13.7176L12.3142 3.91797Z"
              fill="#FFD900"
            />
            <path
              d="M23.3522 3.91797C24.934 3.91797 25.722 4.77877 25.722 6.49521C25.722 6.73747 25.7047 7.00035 25.6759 7.27869H21.7763C21.7763 8.52607 22.4377 9.15493 23.7664 9.15493C24.3991 9.15493 24.957 9.07761 25.4459 8.92297V9.79924C24.957 9.95388 24.3588 10.0312 23.6571 10.0312C21.7475 10.0312 20.7927 8.98998 20.7927 6.90757C20.7927 4.91793 21.644 3.91797 23.3465 3.91797H23.3522ZM21.7763 6.38697H24.7787C24.7557 5.31484 24.284 4.77878 23.3522 4.77878C22.3629 4.77878 21.8395 5.31484 21.7763 6.38697Z"
              fill="#FFD900"
            />
            <path
              d="M27.039 10.0312V3.91797H27.7004L27.873 4.6963C28.3619 4.1757 28.9428 3.91797 29.6272 3.91797V4.81484C28.9658 4.81484 28.4251 5.07257 28.011 5.58802V10.0312H27.0332H27.039Z"
              fill="#FFD900"
            />
            <path
              d="M32.9001 3.91797C34.4818 3.91797 35.2698 4.77877 35.2698 6.49521C35.2698 6.73747 35.2526 7.00035 35.218 7.27869H31.3184C31.3184 8.52607 31.9798 9.15493 33.3085 9.15493C33.9412 9.15493 34.4991 9.07761 34.988 8.92297V9.79924C34.4991 9.95388 33.9009 10.0312 33.1992 10.0312C31.2896 10.0312 30.3406 8.98998 30.3406 6.90757C30.3406 4.91793 31.1918 3.91797 32.8943 3.91797H32.9001ZM31.3241 6.38697H34.3265C34.3035 5.31484 33.8319 4.77878 32.9001 4.77878C31.9108 4.77878 31.3874 5.31484 31.3241 6.38697Z"
              fill="#FFD900"
            />
            <path
              d="M40.3142 5.15914C39.9173 4.9478 39.4687 4.8447 38.9626 4.8447C37.8467 4.8447 37.283 5.49932 37.283 6.80856C37.283 8.35491 37.841 9.13324 38.9626 9.13324C39.4687 9.13324 39.9231 9.05592 40.3142 8.90644V5.16428V5.15914ZM41.292 9.65899C40.6191 9.90125 39.7908 10.025 38.8015 10.025C37.1508 10.025 36.3225 8.9683 36.3225 6.84465C36.3225 4.8911 37.1968 3.91174 38.9568 3.91174C39.4399 3.91174 39.8886 4.00968 40.3142 4.20039V1.69531H41.292V9.65385V9.65899Z"
              fill="#FFD900"
            />
            <path
              d="M46.5029 8.95799C46.825 9.07139 47.2162 9.12808 47.6705 9.12808C48.9072 9.12808 49.5226 8.35492 49.5226 6.80342C49.5226 5.49418 48.9647 4.83955 47.8488 4.83955C47.3369 4.83955 46.8941 4.94264 46.5029 5.15398V8.95283V8.95799ZM45.5251 1.69531H46.5029V4.20039C46.9228 4.00968 47.3714 3.91174 47.8546 3.91174C49.6089 3.91174 50.4889 4.8911 50.4889 6.84465C50.4889 8.96314 49.5686 10.025 47.7223 10.025C46.9286 10.025 46.1923 9.94249 45.5309 9.77239V1.69531H45.5251Z"
              fill="#FFD900"
            />
            <path
              d="M51.1444 3.91797H52.2085L53.7787 8.69103L55.4007 3.91797H56.436L54.1296 10.2116C53.7212 11.3198 53.1058 12.0157 52.289 12.2889L51.9152 11.526C52.5363 11.227 52.985 10.7374 53.2668 10.0673L51.1387 3.91797H51.1444Z"
              fill="#FFD900"
            />
            <path
              d="M58.3399 3.91797V4.99525H57.3621V3.91797H58.3399ZM58.3399 8.9539V10.0312H57.3621V8.9539H58.3399Z"
              fill="#FFD900"
            />
            <path
              d="M0 31.1997V29.0039H24.0595V31.1997H13.1082V42.9777H10.911V31.1997H0Z"
              fill="#FFD900"
            />
            <path
              d="M28.0596 29H30.2625V39.2626C30.2625 39.4636 30.3027 39.6543 30.389 39.8399C30.4753 40.0254 30.5903 40.1904 30.7341 40.3296C30.8837 40.4687 31.0505 40.5821 31.2345 40.6698C31.4186 40.7574 31.6199 40.7986 31.8212 40.7986H48.3517C48.8003 40.7986 49.1742 40.644 49.4733 40.3399C49.7666 40.0357 49.9161 39.6749 49.9161 39.2626V29H52.1191V39.2626C52.1191 39.7832 52.0155 40.2677 51.8085 40.7213C51.6014 41.1749 51.3253 41.5666 50.9802 41.9017C50.6351 42.2367 50.2325 42.4996 49.7724 42.6903C49.318 42.881 48.8406 42.979 48.3517 42.979H31.8212C31.3323 42.979 30.8607 42.881 30.412 42.6903C29.9634 42.4996 29.5608 42.2367 29.2157 41.9017C28.8706 41.5666 28.5887 41.1749 28.3759 40.7213C28.1631 40.2677 28.0596 39.7832 28.0596 39.2626V29Z"
              fill="#FFD900"
            />
            <path
              d="M75.7783 40.8025V42.9777H56.1189V29.0039H58.3161V40.8025H75.7783Z"
              fill="#FFD900"
            />
            <path
              d="M79.7783 29H81.9812V39.2626C81.9812 39.4636 82.0215 39.6543 82.1078 39.8399C82.194 40.0254 82.3091 40.1904 82.4529 40.3296C82.6024 40.4687 82.7692 40.5821 82.9533 40.6698C83.1373 40.7574 83.3386 40.7986 83.54 40.7986H100.07C100.519 40.7986 100.893 40.644 101.192 40.3399C101.485 40.0357 101.635 39.6749 101.635 39.2626V29H103.838V39.2626C103.838 39.7832 103.734 40.2677 103.527 40.7213C103.32 41.1749 103.044 41.5666 102.699 41.9017C102.354 42.2367 101.951 42.4996 101.491 42.6903C101.037 42.881 100.559 42.979 100.07 42.979H83.54C83.0511 42.979 82.5794 42.881 82.1308 42.6903C81.6821 42.4996 81.2795 42.2367 80.9344 41.9017C80.5893 41.5666 80.3075 41.1749 80.0947 40.7213C79.8818 40.2677 79.7783 39.7832 79.7783 39.2626V29Z"
              fill="#FFD900"
            />
            <path
              d="M107.838 34.9036H127.825C128.084 34.9036 128.331 34.8521 128.567 34.7541C128.803 34.6562 129.01 34.5222 129.183 34.3572C129.355 34.1923 129.493 33.9964 129.597 33.7696C129.7 33.5428 129.752 33.3057 129.752 33.0532C129.752 32.8006 129.7 32.5583 129.597 32.3367C129.493 32.1099 129.355 31.914 129.183 31.7491C129.01 31.5841 128.803 31.4553 128.567 31.3573C128.331 31.2646 128.084 31.2182 127.825 31.2182H107.838V29.043H127.808C128.36 29.043 128.883 29.1409 129.372 29.3419C129.861 29.543 130.293 29.8161 130.666 30.1718C131.04 30.5223 131.334 30.945 131.558 31.4398C131.777 31.9295 131.886 32.4655 131.886 33.0377C131.886 33.6253 131.782 34.1614 131.57 34.6562C131.357 35.151 131.063 35.5737 130.69 35.9345C130.316 36.2953 129.884 36.5788 129.384 36.785C128.889 36.9912 128.366 37.0943 127.808 37.0943H110.041V42.9807H107.838V34.9139V34.9036Z"
              fill="#FFD900"
            />
            <path
              d="M148.241 29C148.471 29.2526 148.868 29.6907 149.426 30.3195C149.983 30.9432 150.639 31.6803 151.387 32.5257C152.135 33.371 152.94 34.2833 153.803 35.2627C154.665 36.2421 155.517 37.2059 156.362 38.1595C157.208 39.1131 157.996 40.01 158.738 40.8553C159.48 41.7007 160.101 42.4068 160.601 42.979H157.668C157.656 42.9635 157.513 42.8037 157.231 42.4893C156.955 42.1749 156.592 41.7728 156.149 41.2728C155.706 40.7728 155.2 40.2059 154.642 39.577C154.084 38.943 153.509 38.2935 152.923 37.6286C152.336 36.9637 151.767 36.3142 151.203 35.6802C150.645 35.0462 150.145 34.4844 149.707 33.9947C149.27 33.4999 148.914 33.103 148.643 32.7989C148.373 32.4947 148.241 32.3401 148.241 32.3401L140.769 40.8038H152.762L154.694 42.979H135.886L148.246 29.0052L148.241 29Z"
              fill="#FFD900"
            />
            <path
              d="M168.466 29.0039L176.593 34.6738L184.784 29.0039H188.569L177.715 36.5707V42.9777H175.512V36.5707L164.601 29.0039H168.466Z"
              fill="#FFD900"
            />
          </svg>
        </div>
        <div className="socials flex md:flex-nowrap flex-wrap gap-5">
          <Link href={"/"}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 55 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27.5" cy="27" r="27" fill="#FFD900" />
              <path
                d="M16.3333 39.1654L26.2033 29.2954M29.7908 25.7079L39.6666 15.832M16.3333 15.832L33.4439 39.1654H39.6666L22.556 15.832H16.3333Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <Link href={"/"}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 55 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27.5" cy="27" r="27" fill="#FFD900" />
              <path
                d="M33.5624 19.9362V19.9508M15.3333 20.6654C15.3333 19.1183 15.9478 17.6345 17.0418 16.5406C18.1358 15.4466 19.6195 14.832 21.1666 14.832H32.8332C34.3803 14.832 35.8641 15.4466 36.958 16.5406C38.052 17.6345 38.6666 19.1183 38.6666 20.6654V32.332C38.6666 33.8791 38.052 35.3629 36.958 36.4568C35.8641 37.5508 34.3803 38.1654 32.8332 38.1654H21.1666C19.6195 38.1654 18.1358 37.5508 17.0418 36.4568C15.9478 35.3629 15.3333 33.8791 15.3333 32.332V20.6654ZM22.6249 26.4987C22.6249 27.659 23.0859 28.7718 23.9063 29.5923C24.7268 30.4128 25.8396 30.8737 26.9999 30.8737C28.1602 30.8737 29.273 30.4128 30.0935 29.5923C30.914 28.7718 31.3749 27.659 31.3749 26.4987C31.3749 25.3384 30.914 24.2256 30.0935 23.4051C29.273 22.5846 28.1602 22.1237 26.9999 22.1237C25.8396 22.1237 24.7268 22.5846 23.9063 23.4051C23.0859 24.2256 22.6249 25.3384 22.6249 26.4987Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <Link href={"/"}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 55 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27.5" cy="27" r="27" fill="#FFD900" />
              <path
                d="M22.1666 26.0404V33.332M22.1666 21.6654V21.6799M27.9999 33.332V26.0404M33.8332 33.332V28.957C33.8332 28.1835 33.526 27.4416 32.979 26.8946C32.432 26.3477 31.6901 26.0404 30.9166 26.0404C30.143 26.0404 29.4012 26.3477 28.8542 26.8946C28.3072 27.4416 27.9999 28.1835 27.9999 28.957M16.3333 18.7487C16.3333 17.9751 16.6405 17.2333 17.1875 16.6863C17.7345 16.1393 18.4764 15.832 19.2499 15.832H36.7499C37.5235 15.832 38.2653 16.1393 38.8123 16.6863C39.3593 17.2333 39.6666 17.9751 39.6666 18.7487V36.2487C39.6666 37.0222 39.3593 37.7641 38.8123 38.3111C38.2653 38.8581 37.5235 39.1654 36.7499 39.1654H19.2499C18.4764 39.1654 17.7345 38.8581 17.1875 38.3111C16.6405 37.7641 16.3333 37.0222 16.3333 36.2487V18.7487Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <Link href={"/"}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 55 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27.5" cy="27" r="27" fill="#FFD900" />
              <path
                d="M33.1041 34.7904C33.1041 36.2487 35.2916 39.1654 36.0207 39.1654C38.2082 39.1654 40.1522 36.7343 41.1249 34.7904C42.0976 32.3593 41.8541 26.2839 38.9374 18.0195C36.8126 16.5393 34.5624 16.0654 32.3749 15.832L30.9574 18.6364C29.0017 18.2988 27.0025 18.2988 25.0468 18.6364L23.6249 15.832C21.4374 16.0654 19.1872 16.5393 17.0624 18.0195C14.1457 26.2839 13.9022 32.3593 14.8749 34.7904C15.8476 36.7343 17.7916 39.1654 19.9791 39.1654C20.7082 39.1654 22.8957 36.2487 22.8957 34.7904M20.7083 34.0612C25.8125 35.5195 30.1875 35.5195 35.2916 34.0612M22.1666 27.4987C22.1666 27.8855 22.3203 28.2564 22.5938 28.5299C22.8673 28.8034 23.2382 28.957 23.625 28.957C24.0118 28.957 24.3827 28.8034 24.6562 28.5299C24.9297 28.2564 25.0833 27.8855 25.0833 27.4987C25.0833 27.1119 24.9297 26.741 24.6562 26.4675C24.3827 26.194 24.0118 26.0404 23.625 26.0404C23.2382 26.0404 22.8673 26.194 22.5938 26.4675C22.3203 26.741 22.1666 27.1119 22.1666 27.4987ZM30.9166 27.4987C30.9166 27.8855 31.0703 28.2564 31.3438 28.5299C31.6173 28.8034 31.9882 28.957 32.375 28.957C32.7618 28.957 33.1327 28.8034 33.4062 28.5299C33.6797 28.2564 33.8333 27.8855 33.8333 27.4987C33.8333 27.1119 33.6797 26.741 33.4062 26.4675C33.1327 26.194 32.7618 26.0404 32.375 26.0404C31.9882 26.0404 31.6173 26.194 31.3438 26.4675C31.0703 26.741 30.9166 27.1119 30.9166 27.4987Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <Link href={"/"}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 55 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27.5" cy="27" r="27" fill="#FFD900" />
              <path
                d="M20.7083 24.5833V30.4167H25.0833V40.625H30.9166V30.4167H35.2916L36.7499 24.5833H30.9166V21.6667C30.9166 21.2799 31.0702 20.909 31.3437 20.6355C31.6172 20.362 31.9881 20.2083 32.3749 20.2083H36.7499V14.375H32.3749C30.441 14.375 28.5864 15.1432 27.2189 16.5107C25.8515 17.8781 25.0833 19.7328 25.0833 21.6667V24.5833H20.7083Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="second flex md:flex-nowrap lg:flex-nowrap  justify-center flex-wrap md:justify-between lg:justify-between gap-10 w-full">
        <div className="links my-10 md:w-[50%] w-full flex md:flex-nowrap lg:flex-nowrap  flex-wrap justify-between gap-10">
          <div className="usecase ">
            <h2 className="text-[#FFD900] mb-16">Use Case</h2>
            <ul className="my-5 text-[#FFFFFF] flex flex-col gap-10">
              <Link href={"/"}>Payment</Link>
              <Link href={"/"}>Remittance</Link>
              <Link href={"/"}>Investment</Link>
              <Link href={"/"}>Trade</Link>
              <Link href={"/"}>Capital</Link>
            </ul>
          </div>
          <div className="usecase ">
            <h2 className="text-[#FFD900] mb-16">Products</h2>
            <ul className="my-5 text-[#FFFFFF] flex flex-col gap-10">
              <Link href={"/"}>Payment</Link>
              <Link href={"/"}>Remittance</Link>
              <Link href={"/"}>Investment</Link>
              <Link href={"/"}>Trade</Link>
              <Link href={"/"}>Capital</Link>
            </ul>
          </div>
          <div className="usecase ">
            <h2 className="text-[#FFD900] mb-16">Company</h2>
            <ul className="my-5 text-[#FFFFFF] flex flex-col gap-10">
              <Link href={"/"}>Payment</Link>
              <Link href={"/"}>Remittance</Link>
              <Link href={"/"}>Investment</Link>
              <Link href={"/"}>Trade</Link>
              <Link href={"/"}>Capital</Link>
            </ul>
          </div>
          <div className="usecase ">
            <h2 className="text-[#FFD900] mb-16">Developer</h2>
            <ul className="my-5 text-[#FFFFFF] flex flex-col gap-10">
              <Link href={"/"}>APIs</Link>
              <Link href={"/"}>SDKs</Link>
              <Link href={"/"}>Documentation</Link>
            </ul>
          </div>
        </div>
        <div className="form w-full bg-[#181818] p-10 rounded-[12px]">
          <div className="top mb-10">
            <h2 className="text-[2xl] text-white text-xl">
              Subscribe to newsletter
            </h2>
            <p className="text-[#FFFFFF80] text-sm">
              Sign up to receive new updates
            </p>
          </div>
          <form action="#">
            <input
              type="email"
              name="email"
              className="px-5 py-5 w-full md:w-[314px] bg-transparent text-white outline-none border border-[#FFFFFF4D] rounded-[7px]"
              id="email"
              placeholder="Email address"
            />
            <button className="bg-[#000000] text-[#FFD900] mb-16 block p-5 w-full rounded-[7px] md:w-[314px] mt-10">
              Get Started
            </button>
          </form>
        </div>
      </div>
      <div className="otherlinks mt-16">
        <div className="links  flex md:flex-nowrap lg:flex-nowrap  sm:justify-center flex-wrap    gap-20">
          <div className="learn ">
            <h2 className="text-[#FFD900] mb-16">Learn</h2>
            <ul className="my-5 text-[#FFFFFF] flex flex-col gap-10">
              <Link href={"/"}>Academy</Link>
              <Link href={"/"}>Blog</Link>
              <Link href={"/"}>News</Link>
              <Link href={"/"}>Press</Link>
            </ul>
          </div>
          <div className="community ">
            <h2 className="text-[#FFD900] mb-16">Community</h2>
            <ul className="my-5 text-[#FFFFFF] flex flex-col gap-10">
              <Link href={"/"}>Twitter</Link>
              <Link href={"/"}>Facebook</Link>
              <Link href={"/"}>Instagram</Link>
              <Link href={"/"}>LinkedIn</Link>
            </ul>
          </div>
          <div className="resources ">
            <h2 className="text-[#FFD900] mb-16">Resources</h2>
            <ul className="my-5 text-[#FFFFFF] flex flex-col gap-10">
              <Link href={"/"}>Roadmap</Link>
              <Link href={"/"}>Whitepaper</Link>
              <Link href={"/"}>Our story</Link>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="end flex flex-col md:flex-row justify-center  gap-5 md:justify-between py-3 mt-10 text-sm">
        <div className="copy_privacy flex justify-between">
            <Link href={"/"} className="text-[#FFFFFF80]">
            Privacy & Policy
            </Link>
            <Link href={"/"} className="text-[#FFFFFF80]">
            Terms & Conditions
            </Link>
        </div>
        <p className="text-[#FFFFFF80] ">
          &copy; 2024 copyright by TuluPay.com. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;