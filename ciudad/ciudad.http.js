import * as cityController from './ciudad.controller.js';

const getCityFromUser = (req, res) => {
    
    let city = cityController.getCityWithCityName(req.params.ciudad);

    if (!city) {
        res.status(404).json({message:'not found'})
    }

    res.status(200).json({
        ciudad: city.ciudad,
        datos: city.datos
    })

}

const setCityFromUserId = (req, res) => {
    let city = cityController.setCity(req.city.cityId, req.body.datos);
    res.status(200).send();
}

export {
    getCityFromUser,
    setCityFromUserId
}