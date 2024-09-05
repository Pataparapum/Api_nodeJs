import express from 'express';
import * as ciudadHandlerHttp from './ciudad.http.js';
const router = express.Router();

router.route('/')
    .put(ciudadHandlerHttp.setCityFromUserId)

router.route('/:ciudad')
    .get(ciudadHandlerHttp.getCityFromUser)

router.route('/ciudad')
    .post()

router.route('/ciudad/:ciudadId')
    .delete()

export {router}