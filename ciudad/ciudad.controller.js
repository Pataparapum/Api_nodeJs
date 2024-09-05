import {v4 as uuidV4} from 'uuid';

let cityDatabase = [];

const registerCity = (ciudad, latitud, longitud) => {
    let cityId = uuidV4();

    cityDatabase[cityId] = {
        ciudad: ciudad,
        datos : {latitud: latitud, longitud:longitud}
    }
}

const getCity = (cityId) => {
    return cityDatabase[cityId];
}

const getCityWithCityName = (cityName) => {        
    for (let city in cityDatabase) {
        
        if (cityDatabase[city].ciudad = cityName) {
            return cityDatabase[city];
        }
    }
}

const setCity = (cityId, data) => {
    cityDatabase[cityId].datos = data;
}

export {
    registerCity,
    getCity,
    getCityWithCityName,
    setCity
}

