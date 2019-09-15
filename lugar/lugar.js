const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    //codifica el parametro en un parametro valido para una URL
    const encodeUrl = encodeURI(direccion);
    //Obtener datos de un api usando AXIOS de NPM
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '45e3ab1964msh3705cff99803662p18ec77jsn49935c41557a' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = respuesta.data.Results[0];
    const direcc = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direcc,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
}