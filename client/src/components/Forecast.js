import React from "react";
import logo from "../assets/logo.png";

// import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, foreCast, multiplier }) {
  const arr = [
    0 * multiplier,
    1 * multiplier,
    2 * multiplier,
    3 * multiplier,
    4 * multiplier,
  ];
  console.log(arr);
  // console.log(foreCast.data.list);
  //   console.log(items);
  // const foreCast.data.list = foreCast.data.list;
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className=" font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between">
        {arr.map((i) => (
          <div className="bg-orange-500 p-2 m-2 rounded-xl flex flex-col gap-3 text-yellow-200">
            <p>
              {" "}
              {foreCast ? foreCast.data.list[i].dt_txt : "data fetching..."}
            </p>
            <div className="flex gap-2">
              <img src={logo} className="w-10" alt="" />
              <p className="text-4xl">
                {" "}
                {Math.ceil(
                  foreCast
                    ? foreCast.data.list[i].main.temp - 273
                    : "data fetching..."
                )}
                °{" "}
              </p>
            </div>
            <div className="flex flex-row">
              <p>
                {" "}
                {foreCast
                  ? foreCast.data.list[i].weather[0].description
                  : "data fetching..."}{" "}
              </p>
              <p>
                {" "}
                {foreCast
                  ? foreCast.data.list[i].wind.speed
                  : "data fetching..."}
                m/s{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
