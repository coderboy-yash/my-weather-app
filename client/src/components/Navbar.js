import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import logo from "../assets/logo.png";
const { getCode, getName } = require("country-list");
// import { Dropdown } from 'rsuite';
const Navbar = ({ setCountry, setCity }) => {
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const searchPressed = () => {
    if (getCode(search)) {
      setCity(search1);
      console.log(search1);
      toast.success("Successfully fetched");
      setCountry(search);
    } else {
      toast.error("wrong input");
    }
    console.log(search);
  };

  return (
    <div className="mb-1  w-full  bg-gradient-to-r from-emerald-600 to-purple-500  p-2 items-center flex justify-between  ">
      <Toaster />

      <img src={logo} alt="" className="rounded-full w-20" />
      <div className="flex gap-4 items-center">
        <input
          className="p-2 m-3"
          type="text"
          placeholder="search by country..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={searchPressed}
          className="bg-gradient-to-r from-yellow-300 to-amber-400 m-2 p-2 text-gray-700 rounded-2xl shadow-orange-500 shadow-md w-30"
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
