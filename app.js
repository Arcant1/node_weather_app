const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Name of the city you want to know the Latitude and Longitude',
        demand: true
    }
}).argv;

const _colors = require('colors');
const _place = require('./place/place');
const _weather = require('./weather/weather');


const getInfo = async(_address) => {

    try {
        let place = await _place.getPlaceLatLong(_address);
        let temp = await _weather.getWeatherLatLong(place.lat, place.lon);
        return `The temperature in [Celsius] in ${_address} is : ${temp}°C`.cyan;
    } catch (error) {
        return `No se pudo determinar el clima de ${_address}.`;
    }
}

getInfo(argv.address).then(console.log).catch(console.log);

/*



API KEY

api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}

bc22df8e43456b721bb88cbabd6158b3

*/