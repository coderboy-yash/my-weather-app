import React from "react";
import logo from "../assets/logo.png";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
const TempertureAndDetials = ({ temp, weather }) => {
  console.log(weather);
  return (
    <div className="flex flex-wrap justify-between">
      <div>
        {" "}
        <p>
          {" "}
          temp :-{" "}
          {weather ? Math.ceil(weather.main.temp - 273) : "data fetching..."}°
        </p>
        <p>
          {" "}
          feels like :-
          {weather
            ? Math.ceil(weather.main.feels_like - 273)
            : "data fetching..."}
          °
        </p>
        <p>
          max temp:-{" "}
          {weather
            ? Math.ceil(weather.main.temp_max - 273)
            : "data fetching..."}
        </p>
      </div>
      <div>
        <p>
          weather:-
          {weather ? weather.weather[0].description : "data fetching..."}
        </p>
        <p>wind:- {weather ? weather.wind.speed : "data fetching..."} m/s</p>
        <p>
          visibility:-{" "}
          {weather ? weather.visibility / 1000 : "data fetching..."} km
        </p>
      </div>
      <div>
        <p>humidity:-{weather ? weather.main.humidity : "data fetching..."}</p>
        <p>pressure:-{weather ? weather.main.pressure : "data fetching..."}</p>
        <p>
          sea_level:-{weather ? weather.main.sea_level : "data fetching..."}
        </p>
      </div>
    </div>
  );
};

export default TempertureAndDetials;
