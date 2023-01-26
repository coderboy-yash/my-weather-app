// // const axios = require("axios");

// // const options = {
// //   method: 'GET',
// //   url: 'https://open-weather13.p.rapidapi.com/city/kanpur',
// //   headers: {
// //     'X-RapidAPI-Key': '9a90d31862mshb2f3d9343c3c234p1fc6b0jsn21ee67b18193',
// //     'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// //   }
// // };

// // axios.request(options).then(function (response) {
// // 	console.log("rapid api",response.data);
// // }).catch(function (error) {
// // 	console.error(error);
// // });

// // console.log("open weather api\n");
// // fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7980e5764a2f6ae7be4f5ac31e76831a')
// // .then(response=>response.json())
// // .then(data=>console.log(data.main.temp))
// // const data =fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7980e5764a2f6ae7be4f5ac31e76831a')
// // .then(response=>response.json());
// // console.log("data=>", data);

// const { getCode, getName } = require('country-list');

// // console.log(getName('IS')); // Iceland
// // console.log(getCode('Iceland')); // IS
// // console.log(getCode('Nowhere-to-be-found-land')); // undefined
// // console.log(State.getAllStates())
// code=getCode('India');

// let City = require('country-state-city').City;
// array=City.getCitiesOfCountry(code);
// array.slice(0, 30).map( (item) => console.log(item.latitude, item.longitude, item.name));
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028",
  headers: {
    "X-RapidAPI-Key": "9a90d31862mshb2f3d9343c3c234p1fc6b0jsn21ee67b18193",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
