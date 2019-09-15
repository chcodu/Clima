const axios = require('axios');



const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=477bb48f3ca3bce0eff79cf7fb3e31fa&units=metric`)

    if (resp.data.main.temp.length === 0) {
        throw new Error(`No se encontró respuesta para dichas zonas geograficas`);
    } else {

        const temp = resp.data.main.temp;

        return temp;

    }
}


module.exports = {
    getClima
}