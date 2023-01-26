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

const SetView = ({ latitude, longitude }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([latitude, longitude], 5);
  });
};

const Map = ({ country }) => {
  let map = null;
  const code = getCode(country);
  console.log(code);
  const array = City.getCitiesOfCountry(code);
  console.log(IsoToLatLong[code].coordinate);
  const [latitude, longitude] = IsoToLatLong[code].coordinate;

  console.log(latitude, longitude);

  // console.log(array);
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
    const response = await Axios.get("http://localhost:5000/getPoppup");
    console.log(
      response.data.main.pressure,
      " ",
      response.data.weather[0].main
    );
    setData(response.data.lon);
    console.log(data);
  };
  useEffect(() => {
    getApi();
    handleSetView();
    flyto();
  }, [country]);

  return (
    <div>
      <MapContainer
        center={[latitude, longitude]}
        zoom={4}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "calc(100vh )" }}
      >
        <SetView latitude={latitude} longitude={longitude} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {array.slice(0, 10).map((item) => (
          <Link
            to={`/detail/${item.name}/${item.latitude}/${item.longitude}`}
            key={item.name}
          >
            <Marker
              position={[item.latitude, item.longitude]}
              icon={markerIcon}
            >
              <Popup>
                <p>Cick to view all details...</p>
                <p>city</p>
                <p>temperature</p>
                <p>weather</p>
              </Popup>
            </Marker>
          </Link>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
