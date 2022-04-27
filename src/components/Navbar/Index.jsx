import React from "react";
import {ReactComponent as LogoSVG } from '../../assets/images/spectrum-logo.svg';


export default function Index() {
  let NavbarMenu = [
    {name: "Home", link: "/"},
    {name: "Programs", link: "/programs"},
    {name: "Events", link: "/events"},
    {name: "Sponsors", link: "/sponsors"},
    {name: "FAQs", link: "/faqs"},
    {name: "Contact Us", link: "contact"},
  ]
  return (
    <>
      <div className="bg-white-400 w-full fixed top-0 left-0 shadow-md h-8">
        <div className="md:flex bg-white py-1 justify-between items-center">
          <div className="text-xl cursor-pointer flex items-center uppercase text-gray-800 font-bold ml-4 font-[Poppins]">
            <span className="text-indigo-600 text-3xl pl-4 mr-1">
              <LogoSVG className="h-12 w-12"/>
            </span>
            Spectrum
          </div>
          <ul className="md:flex md:item-center md:mr-8">
          {NavbarMenu.map((menu) => {
            return (<li key={menu.name} className="md:ml-8 text-xl">
              <a href={menu.link} className="text-gray-800 link link-underline link-underline-black underline-offset-4 duration-200 font-bold font-[Poppins]">{menu.name}</a>
            </li>)
          })}
        </ul>
        <ul className="md:flex md:item-center md:mr-8">
          <li className="md:ml-8 text-xl p-4 bg-black">
            <a href="/register" className="text-white rounded font-bold duration-200">Register</a>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}
