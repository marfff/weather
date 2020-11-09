const fetch = require('node-fetch');
require('dotenv').config();



const getWeather = async(location, countryCode) => {
    let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},${countryCode}&units=metric&appid=${process.env.APPID}`);
    return await data.json();
    console.log( await data.json());
}


module.exports = getWeather;