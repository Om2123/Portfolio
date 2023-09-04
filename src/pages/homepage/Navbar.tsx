import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav
        id="desktop-nav"
        className="flex justify-between bg-zinc px-40 pt-8 "
      >
        <div className="logo  hover:cursor-default text-2xl">
          {" "}
          &#169; Om Wakhare{" "}
        </div>
        <div>
          <ul className="nav-links flex gap-2 list-none text-lg">
            <li>
              <a
                href="#about"
                className="hover:text-orange-500 hover:underline px-5 text-2xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-orange-500 hover:underline px-5 text-2xl"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-orange-500 hover:underline px-5 text-2xl"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-500 hover:underline px-5 text-2xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
     
    </div>
  );
}
