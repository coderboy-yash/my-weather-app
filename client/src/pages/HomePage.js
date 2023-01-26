import React, { createContext, useEffect, useState } from "react";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import LeftPanel from "../components/LeftPanel";
import { latLng } from "leaflet";
import IsoToLatLong from "country-iso-to-coordinates";
const { getCode, getName } = require("country-list");
let City = require("country-state-city").City;

const HomePage = () => {
  const code = getCode("India");
  const [country, setCountry] = useState("India");
  const [latitude, setLatitude] = useState(IsoToLatLong[code].coordinate[0]);
  const [longitude, setLongitude] = useState(IsoToLatLong[code].coordinate[1]);
  const [city, setCity] = useState("");
  const [zoom, setZoom] = useState(4);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(9);

  console.log(IsoToLatLong[code].coordinate);

  useEffect(() => {
    const code = getCode(country);
    console.log(code);
    const array = City.getCitiesOfCountry(code);
    console.log(IsoToLatLong[code].coordinate);
    // const [latitude, longitude] = IsoToLatLong[code].coordinate;
    setLatitude(IsoToLatLong[code].coordinate[0]);
    setLongitude(IsoToLatLong[code].coordinate[1]);

    console.log(latitude, longitude);
  }, [country]);

  return (
    <div className="">
      <Navbar setCountry={setCountry} setCity={setCity}></Navbar>

      <div className="flex">
        <div className="w-1/5 bg-gradient-to-b from-yellow-200 to-fuchsia-400">
          <LeftPanel
            country={country}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            setZoom={setZoom}
            setFirst={setFirst}
            setLast={setLast}
          ></LeftPanel>
        </div>
        <div className="w-4/5">
          <Map
            country={country}
            latitude={latitude}
            longitude={longitude}
            zoom={zoom}
            first={first}
            last={last}
          ></Map>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
