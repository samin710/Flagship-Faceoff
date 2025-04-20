import React, { useState } from "react";
import bgImage from "../../assets/banner.png";
import { Link } from "react-router";
import Button from "../ui/Button";

const Hero = ({ handleSearch }) => {
  const [text, setText] = useState("");
  // console.log(text);
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
      <form
        onSubmit={(e) => {
          handleSearch(e, text);
          setText("");
        }}
        className="text-center  pb-12"
      >
        <div className="flex md:flex-row flex-col justify-center">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-gray-500 rounded p-3 w-2/3 md:mr-2 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search Phone by Name"
          />

          <Button text={"Search"} type={"submit"}></Button>
        </div>
      </form>
    </>
  );
};

export default Hero;
