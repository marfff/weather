const express = require('express');
const router = express.Router();
const getWeather = require('../lib/getWeather');

router.get('/', (req, res) => {
    res.render('weather');
});

router.post('/', async(req, res) => {
    let location = req.body.location;
    let countryCode = req.body.countryCode;
    let data = await getWeather(location, countryCode);
    if (data.cod == '404') {
        res.render('weather', {
            err:'There is no such location'
});
return; 
}
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


