import React from "react";
import n1 from "./../../../public/img/netflix_1.png";
import n2 from "./../../../public/img/netflix_2.png";
import m1 from "./../../../public/img/mynta_mob.png";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
              <Image src={m1} alt="d" width={400} />
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  Myntra Clone
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  Next Js
                </p>
              </div>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="p-6 pt-0 flex">
              <button
                className="block w-1/2 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <a href="https://myntra-clone-be.vercel.app/" target="_blank">
                  Live Demo
                </a>
              </button>
              <button
                className="block w-1/2 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <a href="https://github.com/Om2123/Myntra" target="_blank">
                  Github
                </a>
              </button>
            </div>
          </div>

          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
              <Image src={n1} alt="d" width={400} />
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  Netflix Clone
                </p>
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  React Js
                </p>
              </div>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="p-6 pt-0 flex">
              <button
                className="block w-1/2 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <a
                  href="https://steady-lollipop-35bed9.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
              <button
                className="block w-1/2 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <a
                  href="https://github.com/Om2123/Netflix-clone"
                  target="_blank"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
