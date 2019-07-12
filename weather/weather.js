const axios = require('axios');

let appid = 'bc22df8e43456b721bb88cbabd6158b3';

const getWeatherLatLong = async(lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`);
    return response.data.main.temp;
}
module.exports = {
    getWeatherLatLong
}