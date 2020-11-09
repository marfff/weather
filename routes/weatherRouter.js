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
let temp1 = parseInt(temp)
let feelslike = data.main.feels_like;
let feelslike1 = parseInt(feelslike)
let wind = data.wind.speed;
let windmph = parseInt(wind * 2.23594)
let sunset = 1000*(data.sys.sunset);
let sunrise = data.sys.sunrise;
let date = new Date(sunset * 1000);
let date2 = date.getHours() +' : ' + date.getMinutes()
let description = data.weather[0].description;
let icon = data.weather[0].icon;
let iconURL = 'http://openweathermap.org/img/wn/'+icon+'@2x.png'
let max = parseInt(data.main.temp_max);




res.render('index', {
    name,
    data: {temp, feelslike, wind, sunrise, sunset,description,icon,windmph,temp1, feelslike1,max,date2,iconURL}
        }); 
});

module.exports = router;


