import React from "react";
import { ReactComponent as LogoSVG } from "../../assets/images/spectrum-logo.svg";
import { BiMenu } from 'react-icons/bi';
import {MdClose} from 'react-icons/md';

export default function Navbar() {
  let NavbarMenu = [
    { name: "Home", link: "/" },
    { name: "Programs", link: "/programs" },
    { name: "Events", link: "/events" },
    { name: "Sponsors", link: "/sponsors" },
    { name: "FAQs", link: "/faqs" },
    { name: "Contact Us", link: "/contact" },
    { name: "Register", link: "/register" },
  ];

  let [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="bg-white-400 w-full fixed top-0 left-0 shadow-md h-8">
        <div className="md:flex bg-white py-1 justify-between items-center">
          <div className="text-xl cursor-pointer flex items-center uppercase text-gray-800 font-bold ml-4 font-[Poppins]">
            <span className="text-indigo-600 text-3xl pl-4 mr-1">
              <LogoSVG className="h-12 w-12" />
            </span>
            Spectrum
          </div>
          <div className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden" onClick={() => {
            setIsOpen(!isOpen);
          }}>
            {isOpen ? <MdClose /> : <BiMenu />}
          </div>
          <ul
            className={`md:flex md:item-center md:mr-8 absolute md:static md:pb-0 pb-12 md:pl-0 pl-9 bg-white w-full 
            md:w-screen justify-end
            md:z-auto z-[-1] left-0 ${isOpen ? "top-30 opacity-100" : "top-[-490] opacity-0"}`}
          >
            {NavbarMenu.map((menu) => {
              return (
                <li key={menu.name} className="md:ml-8 text-xl md:my-0 my-8">
                  <a
                    href={menu.link}
                    className="text-gray-800 link link-underline link-underline-black underline-offset-4 duration-200 font-bold font-[Poppins]"
                  >
                    {menu.name}
                  </a>
                </li>
              );
            })}
          </ul>
          
        </div>
      </div>
    </>
  );
}
