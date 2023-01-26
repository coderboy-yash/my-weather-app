import react, { useState } from "react";
import Map, { SetView } from "./Map";
const CityCard = ({ city, setLatitude, setLongitude, setZoom }) => {
  const display = () => {
    setLatitude(city.latitude);
    setLongitude(city.longitude);
    setZoom(15);
  };
  // console.log("city",city.city.name);
  return (
    <div className="m-3 p-2 border-orange-400 border-t-2 justify-center items-center flex flex-col shadow-xl">
      <div className="">{city.name}</div>
      <div className="flex gap-3">
        <div className="text-[12px]">{city.latitude}</div>
        <div className="text-[12px]">{city.longitude}</div>
      </div>
      <button onClick={display}>click me</button>
    </div>
  );
};

export default CityCard;
