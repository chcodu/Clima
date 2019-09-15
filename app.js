const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });;


// clima.getClima(40.750000, -74.000000).then((result) => {
//     console.log(result);

// }).catch((err) => {
//     console.log(err);

// });

const getInfo = async(direccion) => {



    try {
        let lug = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(lug.lat, lug.lng);

        return `El clima de ${lug.direcc} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });;