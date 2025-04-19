import React from "react";
import bgImage from "../../assets/banner.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <>
      <div className="pt-12">
        <img className="w-full md:w-md mx-auto" src={bgImage} alt="" />
      </div>
      <div className="text-center py-5">
        <h1 className="text-7xl mb-4">Browse, Search, View, Buy</h1>
        <p className="text-gray-500 mb-4">
          Best place to browse, search, view details and purchase of top
          flagship phones <br /> of the current time - FlagshipFaceOff
        </p>
      </div>
      <form className="text-center  pb-12">
        <div className="flex md:flex-row flex-col justify-center">
          <input
            className="border border-gray-500 rounded p-3 w-2/3 md:mr-2 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search Phone by Name"
          />
          <button className="relative inline-block text-lg group cursor-pointer">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Search</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Hero;
