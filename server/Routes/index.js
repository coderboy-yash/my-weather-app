import express from "express";
import fetch from "node-fetch";
const router = express.Router();
export default router;

router.get("/getData", (req, res) => {
  console.log(req.query.name);
  console.log(req.query.class1);
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7980e5764a2f6ae7be4f5ac31e76831a"
  )
    .then((response) => response.json())
    .then((data) => res.send(data.coord));
});
router.get("/getPoppup", (req, res) => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7980e5764a2f6ae7be4f5ac31e76831a"
  )
    .then((response) => response.json())
    .then((data) => res.send(data));
});
router.get("/getWeather", (req, res) => {
  console.log(req.query.latitude);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${req.query.latitude}&lon=${req.query.longitude}&appid=7980e5764a2f6ae7be4f5ac31e76831a`
  )
    .then((response) => response.json())
    .then((data) => res.send(data));
});
router.get("/getForeCast", (req, res) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${req.query.latitude}&lon=${req.query.longitude}&appid=7980e5764a2f6ae7be4f5ac31e76831a`
  )
    .then((response) => response.json())
    .then((data) => res.send(data));
});

//
const name = "";
const url =
  "https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8a761fd4d9msh1388d23e41c8d32p1272f5jsn04262d19bb1e",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};
router.get("/getForecast", (req, res) => {
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => res.send(data))
    .catch((err) => console.error("error:" + err));
});
