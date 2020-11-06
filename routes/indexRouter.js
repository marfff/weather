const express = require('express');
const router = express.Router();
const getWeather = require('../lib/getWeather');

router.get('/', async(req, res) => {
    let data = await getWeather("Manchester","uk");
    let name = data.name;
    let temp = data.main.temp;
    let feelslike = data.main.feels_like;
    let wind = data.wind.speed;
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;
    let description = data.weather[0].description;
    let icon = data.weather[0].icon;
    res.render('index', {
        name,
        data: {temp, feelslike, wind, sunrise, sunset,description,icon}
    });
});

module.exports = router;