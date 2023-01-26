import React from "react";
import { useEffect, useState } from "react";
import { options, fetchdata } from "../utils/fetchData";
import Axios from "axios";
import { useParams } from "react-router-dom";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TimeAndLocation from "../components/TimeAndLocation";
import TempertureAndDetials from "../components/TempertureAndDetials";
import Forecast from "../components/Forecast";

const DetailPage = () => {
  const [weather, setWeather] = useState("");
  const [foreCast, setForeCast] = useState("");

  const { city, latitude, longitude } = useParams();
  console.log(city, latitude, longitude);

  const [temp, setTemp] = useState("");
  console.log("hell1");
  const getData = async () => {
    // console.log("hello");
    const response = await Axios.get(
      `/getWeather/?latitude=${latitude}&longitude=${longitude}`
    );
    // console.log(response.data);
    setWeather(response.data);
    console.log(weather);
    const response1 = await Axios.get(
      `/getForeCast/?latitude=${latitude}&longitude=${longitude}`
    );

    console.log(response1);
    setForeCast(response1);
  };

  useEffect(() => {
    console.log("useeffect", weather);
    getData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-yellow-200 to-amber-400  m-10 p-10 mt-0">
      <TimeAndLocation city={city} foreCast={foreCast}></TimeAndLocation>
      <TempertureAndDetials
        temp={temp}
        weather={weather}
      ></TempertureAndDetials>
      <Forecast
        title={"hourly forecast:"}
        foreCast={foreCast}
        multiplier={1}
      ></Forecast>
      <Forecast
        title={"daily forecast:"}
        foreCast={foreCast}
        multiplier={8}
      ></Forecast>
    </div>
  );
};

export default DetailPage;
