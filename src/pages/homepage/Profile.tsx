import React from "react";
import pp from "./../../../public/img/om_pp_circle.png";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Profile() {
  return (
    <div id="profile" className="flex justify-between px-60 py-3">
      <div className=" ">
        <Image src={pp} alt="om" width={350} />
      </div>
      <div className=" mt-24">
        <p className="text-xl text-center">Hello, I'm</p>
        <h1 className=" text-4xl mb-3 text-center">Om vakhare</h1>
        <p className="text-2xl  text-center">FrontEnd Developer</p>
        <div className="py-5 flex">
          <a href="#_" className="relative inline-block mx-4  text-lg group animate-bounce">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Download CV</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
          <a href="#_" className="relative inline-block mx-4 text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Contact Info</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
        <div id="socials-container " className="flex justify-center">
          <div className="text-base px-3">
            <AiFillLinkedin size={"2.3rem"}></AiFillLinkedin>
          </div>
          <div className="text-md px-3">
            <AiFillGithub size={"2.3rem"}></AiFillGithub>
          </div>
        </div>
      </div>
    </div>
  );
}
