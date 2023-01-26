import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marker from "../assets/marker.png";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

//
import IsoToLatLong from "country-iso-to-coordinates";

const country = IsoToLatLong["GB"];

console.log(country.coordinate);
//

const { getCode, getName } = require("country-list");
let City = require("country-state-city").City;
const markerIcon = new L.Icon({
  iconUrl: marker,
  iconSize: [35, 45],
  iconAnchor: [17, 46],
  popupAnchor: [0, 46],
});

export const SetView = ({ latitude, longitude, zoom }) => {
  const map = useMap();
  useEffect(() => {
    console.log("zoom:", zoom);
    map.setView([latitude, longitude], zoom);
  });
};

const Map = ({ country, latitude, longitude, zoom, first, last }) => {
  const code = getCode(country);
  let temp;
  console.log(code);
  const array = City.getCitiesOfCountry(code);
  // console.log(IsoToLatLong[code].coordinate);
  // const [latitude, longitude] = IsoToLatLong[code].coordinate;
  // console.log(latitude, longitude);

  console.log(array);
  //  array.slice(0, 10).map((item)=>console.log(item))
  //  get data from api
  const [data, setData] = useState("");
  const handleSetView = async (map) => {
    console.log("setview");
  };
  const flyto = async () => {
    console.log("flyto");
  };
  const getApi = async () => {
    const response = await Axios.get(
      `http://localhost:5000/getWeather/?latitude=${latitude}&longitude=${longitude}`
    );
    console.log(
      response.data.main.pressure,
      " ",
      response.data.weather[0].main
    );
    temp = response.data.weather[0].main;
    setData(response.data.lon);
    console.log(data);
  };
  useEffect(() => {
    getApi();
    handleSetView();
    flyto();
  }, []);

  return (
    <div>
      <MapContainer
        center={[latitude, longitude]}
        zoom={4}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "calc(100vh )" }}
      >
        <SetView latitude={latitude} longitude={longitude} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {array.slice(first, last).map((item) => (
          <Marker position={[item.latitude, item.longitude]} icon={markerIcon}>
            <Popup>
              <SetView latitude={latitude} longitude={longitude} zoom={7} />
              <div>
                <Link
                  to={`/detail/${item.name}/${item.latitude}/${item.longitude}`}
                  key={item.name}
                >
                  <p className="bg-gradient-to-r from-yellow-300 to-amber-400 p-2  text-white border-b-orange-400 border-2 text-[16px]">
                    Cick to view weather details...
                  </p>
                </Link>
                <p className="text-[12px]">City : {item.name}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
