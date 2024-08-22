import express from 'express';
const router = express.Router();

router.route('/')
    .get()

router.route('/:nombreCiudad')
    .get()

router.route('/:nombreCiudad/:dias')
    .get()

export {router}