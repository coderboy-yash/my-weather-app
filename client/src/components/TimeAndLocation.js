import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const TimeAndLocation = ({ city, foreCast }) => {
  return (
    <div>
      <div className="flex items-center text-orange-600 font-semibold text-lg underline">
        <Link to="/">
          <img src={logo} alt="" className="w-20 m-0 p-0" />
        </Link>
        <p>Complete Weahter Information</p>
      </div>
      <div className="flex items-center justify-center my-6">
        <p className=" text-xl font-semibold text-orange-600 text-[48px] ">
          {city}
        </p>
      </div>
      <div className="flex items-center justify-center my-6 text-[20px] text-red-500 underline">
        <p> {foreCast ? foreCast.data.list[1].dt_txt : "data fetching..."}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
