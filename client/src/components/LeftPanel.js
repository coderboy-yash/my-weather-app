import React, { useEffect, useState } from "react";

import Axios from "axios";
import Pagination from "@mui/material/Pagination";
import logo from "../assets/logo.png";
import CityCard from "./CityCard";
const { getCode, getName } = require("country-list");
let City = require("country-state-city").City;

const LeftPanel = ({
  country,
  city,
  setLatitude,
  setLongitude,
  setZoom,
  setFirst,
  setLast,
}) => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [cityPerPage] = useState(10);
  const indexOfLastCity = currentPage * cityPerPage;
  const indexOfFirstCity = indexOfLastCity - cityPerPage;

  const paginate = (event, value) => {
    setCurrentPage(value);
    setFirst(indexOfLastCity - cityPerPage);
    setLast(currentPage * cityPerPage);

    console.log("hello", event, value);
    // window.scrollTo({top:800,behaviour:"smooth"});
  };

  const [lon, setLon] = useState("");
  const code = getCode(country);
  //  console.log(code);
  console.log(city);
  const array = City.getCitiesOfCountry(code);
  console.log(array);
  const name = "yash";
  const class1 = "imt";
  const getLon = async () => {
    const response = await Axios.get(
      `http://localhost:5000/getData/?name=${name}&class1=${class1}`
    );
    console.log(response);
    setLon(response.data.lon);
  };
  useEffect(() => {
    getLon();
  }, []);
  return (
    <div className="overflow-auto">
      <h1>cities</h1>
      <div className="overflow-auto h-[70vh]">
        {array.slice(indexOfFirstCity, indexOfLastCity).map((item, index) => (
          <CityCard
            city={item}
            key={index}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            setZoom={setZoom}
          ></CityCard>
        ))}
      </div>
      <Pagination
        count={20}
        color="primary"
        defaultPage={1}
        page={currentPage}
        onChange={paginate}
      />
      <h2>{lon}</h2>
    </div>
  );
};

export default LeftPanel;
