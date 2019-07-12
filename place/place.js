const axios = require('axios');

const getPlaceLatLong = async(_address) => {
    const encodedURL = encodeURI(_address);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        //timeout: 1000,
        headers: {
            'X-RapidAPI-Key': '01f65cbe91mshf7c7b1b43e9eb24p1ca46bjsn33f197e4b1f9'
        }
    });

    const response = await instance.get();
    const data = response.data.Results[0];


    const address = data.name;
    const lat = data.lat;
    const lon = data.lon;


    if (data.length === 0) {
        throw new Error(`There is no results for: " ${_address} "`)
    }

    return {
        address,
        lat,
        lon
    }

}
module.exports = {
    getPlaceLatLong
}